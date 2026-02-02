import { useSort } from "../hooks/useSort";
import { GoArrowDown, GoArrowUp, GoArrowBoth } from "react-icons/go";
import Table from "./Table";

export default function SortableTable(props) {
  const { config, data } = props;

  const { handleClick, sortBy, sortOrder, sortedData } = useSort(data, config);

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
