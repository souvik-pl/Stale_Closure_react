# Stale closure and React.memo (unoptimized branch 1)

### Goal
There should not be any stale closure issue and `HeavyComponent` should not re-render when state gets updated in the `App` component.

### What's happening in the code?
Whenever we click on the `Update count` button, the state of `count` gets updated, leading to the re-rendering of the `App` component. Consequently, `heavyComponentHandler` and `updateCount` are re-created with new memory references. As a result of the parent component getting re-rendered and the prop value being updated, `HeavyComponent` will also be re-rendered.

### Outcome
No Stale closure and `HeavyComponent` re-renders