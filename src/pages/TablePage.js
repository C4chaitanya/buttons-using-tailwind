import Table from "../components/Table";

export default function TablePage() {
  const data = [
    {
      name: "Orange",
      color: "bg-orange-500",
      score: 5,
    },
    {
      name: "Apple",
      color: "bg-red-500",
      score: 4,
    },
    {
      name: "Banana",
      color: "bg-yellow-500",
      score: 3,
    },
    {
      name: "Pears",
      color: "bg-green-500",
      score: 2,
    },
  ];

  return <Table tableData={data}></Table>;
}
