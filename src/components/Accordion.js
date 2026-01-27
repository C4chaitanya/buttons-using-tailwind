import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

export default function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (index) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items?.map((item, idx) => {
    const isExpanded = idx === expandedIndex;
    return (
      <section key={item.id}>
        <div
          onClick={() => handleClick(idx)}
          className="flex p-3 bg-gray-50 items-center justify-between border-b cursor-pointer"
        >
          {item.label}
          <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        </div>
        {isExpanded && <div className="p-3">{item.description}</div>}
      </section>
    );
  });
  return <div>{renderedItems}</div>;
}
