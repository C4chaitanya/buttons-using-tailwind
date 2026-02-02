import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

const reducer = produce((state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count = state.count + 1;
      return;
    case DECREMENT_COUNT:
      state.count = state.count - 1;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case UPDATE_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
});

const INCREMENT_COUNT = "increment-count";
const DECREMENT_COUNT = "decrement-count";
const SET_VALUE_TO_ADD = "set-value-to-add";
const UPDATE_COUNT = "update-count";

export default function CounterPageWithReducer({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  console.log("state", state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: UPDATE_COUNT,
    });
  };

  return (
    <Panel className="w-70">
      <h1 className="text-lg pb-5">Count: {state.count}</h1>
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
            value={state.valueToAdd || ""}
            onChange={handleChange}
            className="p-1 bg-gray-50 border border-gray-300"
          />
        </div>

        <Button outline>Add it!</Button>
      </form>
    </Panel>
  );
}
