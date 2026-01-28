import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export default function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const renderedItems = options?.map((option) => {
    return (
      <li
        className="cursor-pointer"
        key={option.id}
        onClick={() => handleOptionClick(option)}
      >
        {option.name}
      </li>
    );
  });

  const handleChevronClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedOption) => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  return (
    <div ref={divEl} className="relative">
      <Panel
        className="flex items-center justify-between cursor-pointer"
        onClick={handleChevronClick}
      >
        {value?.name || "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && (
        <Panel className="absolute top-full left-0 right-0 border-t-0 z-10">
          <ul>{renderedItems}</ul>
        </Panel>
      )}
    </div>
  );
}
