import { useState } from "react";
import { GoArrowDown, GoArrowUp, GoArrowBoth } from "react-icons/go";
import Table from "./Table";

export default function SortableTable(props) {
  const { config, data } = props;

  const [sortBy, setSortBy] = useState(null);

  const [sortOrder, setSortOrder] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("asc");
      return;
    }

    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortBy(null);
      setSortOrder(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // only sort the data, if sortBy and sortOrder is not null
  // Make a copy of data prop.
  // Find the correct sortValue function and use it to sort the data.

  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={updatedConfig} data={sortedData} />;

  function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return <GoArrowBoth />;
    }

    if (sortOrder === null) {
      return <GoArrowBoth />;
    } else if (sortOrder === "asc") {
      return <GoArrowUp />;
    } else if (sortOrder === "desc") {
      return <GoArrowDown />;
    }
  }
}
