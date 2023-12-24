import { useCallback, useEffect, useRef, useState } from "react";
import { HeavyComponentMemoized } from "./HeavyComponent/HeavyComponent";

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef<() => void>();

  console.log("App renders");

  useEffect(() => {
    ref.current = () => {
      console.log(count);
    }
  }, [count])

  const heavyComponentHandler = useCallback(() => {
    ref.current!();
  }, []);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={updateCount}>Update count</button>
      <HeavyComponentMemoized clickHandler={heavyComponentHandler} />
    </>
  );
}

export default App