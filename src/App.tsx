import { useState } from "react";
import HeavyComponent from "./HeavyComponent/HeavyComponent";

function App() {
  const [count, setCount] = useState(0);

  console.log("App renders");

  const heavyComponentHandler = () => {
    console.log(count);
  };

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={updateCount}>Update count</button>
      <HeavyComponent clickHandler={heavyComponentHandler} />
    </>
  );
}

export default App