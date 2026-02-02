import Button from "../components/Button";
import { useCounter } from "../hooks/useCounter";

export default function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>{count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
    </div>
  );
}
