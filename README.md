# Stale closure and React.memo (unoptimized branch 2)

### Goal
There should not be any stale closure issue and `HeavyComponent` should not re-render when state gets updated in the `App` component.

### What's happening in the code?
Whenever we click on the `Update count` button, the state of `count` gets updated, leading to the re-rendering of the `App` component. Consequently, `updateCount` will be re-created with new memory reference. But, `heavyComponentHandler` will not be re-created due to the `useCallback` hook. It will have the previous reference. As a result of the parent component getting re-rendered, `HeavyComponent` will also be re-rendered. But when we click on `Print count from Heavy Component` button, it will always print 0. This is because of the empty dependency of the `useCallback` hook, which means whatever the value of the `count` was there at the time of initial render, `heavyComponentHandler` will form a closure with that value.

### Outcome
Stale closure and `HeavyComponent` re-renders