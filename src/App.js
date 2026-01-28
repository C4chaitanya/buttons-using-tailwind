import Dropdown from "./components/Dropdown";
import { useState } from "react";

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const dropdownOptions = [
    {
      id: 1,
      label: "red",
      name: "Red",
    },
    {
      id: 2,
      label: "green",
      name: "Green",
    },
    {
      id: 3,
      label: "yellow",
      name: "Yellow",
    },
  ];

  return (
    <div>
      <Dropdown
        options={dropdownOptions}
        value={selectedOption}
        onChange={handleSelect}
      />
    </div>
  );
}
