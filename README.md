# Stale closure and React.memo (unoptimized branch 4)

### Goal
There should not be any stale closure issue and `HeavyComponent` should not re-render when state gets updated in the `App` component.

### What's happening in the code?
Whenever we click on the `Update count` button, the state of `count` gets updated, leading to the re-rendering of the `App` component. Consequently, `updateCount` will be re-created with new memory reference. Also, `heavyComponentHandler` will be re-created due to the `count` dependency in the `useCallback` hook. As a result of the parent component getting re-rendered and the prop value being updated, `HeavyComponent` will also be re-rendered even though we are using `React.memo` for it.
Again, this is just like `unoptimized_1` branch.

### Outcome
No Stale closure and `HeavyComponent` re-renders