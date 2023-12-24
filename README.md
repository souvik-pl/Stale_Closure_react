# Stale closure and React.memo (optimized branch)

### Goal
There should not be any stale closure issue and `HeavyComponent` should not re-render when state gets updated in the `App` component.

### What's happening in the code?
Whenever we click on the `Update count` button, the state of `count` gets updated, leading to the re-rendering of the `App` component. Consequently, `updateCount` will be re-created with new memory reference. 
Here, we'll use `useRef` hook. We know that `const ref = useRef()` is an object preserved between re-renders by React. Its refernce never changes.

```typescript
const ref = useRef<() => void>();

useEffect(() => {
    ref.current = () => {
      console.log(count);
    }
}, [count])

const heavyComponentHandler = useCallback(() => {
    ref.current!();
}, []);
```
Since, Closures don't perform deep cloning of an object. So, we can mutate the object. Even though, `heavyComponentHandler` points to initial memory address, `ref.current` will always point to the latest value as we are updating it in `useEffect`.

### Outcome
No Stale closure and `HeavyComponent` does not re-render




