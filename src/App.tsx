import { useCallback, useState } from "react";
import { HeavyComponentMemoized } from "./HeavyComponent/HeavyComponent";

function App() {
  const [count, setCount] = useState(0);

  console.log("App renders");

  const heavyComponentHandler = useCallback(() => {
    console.log(count);
  }, [count]);

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