import Sidebar from "./components/Sidebar";
import RouteLinks from "./components/RouteLinks";

export default function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <RouteLinks />
    </div>
  );
}
