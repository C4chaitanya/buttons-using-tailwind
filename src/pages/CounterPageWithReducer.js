import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

export default function CounterPageWithReducer({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="w-70">
      <h1 className="text-lg pb-5">Count: {count}</h1>
      <div className="flex flex-row gap-2">
        <Button primary rounded onClick={increment}>
          Increment
        </Button>
        <Button warning rounded onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="pt-5 flex flex-col pb-5">
          <label>Add a lot</label>
          <input
            type="number"
            value={valueToAdd || ""}
            onChange={handleChange}
            className="p-1 bg-gray-50 border border-gray-300"
          />
        </div>

        <Button outline>Add it!</Button>
      </form>
    </Panel>
  );
}
