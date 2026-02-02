import AccordionPage from "../pages/AccordionPage";
import DropdownPage from "../pages/DropdownPage";
import ButtonPage from "../pages/ButtonPage";
import ModalPage from "../pages/ModalPage";
import TablePage from "../pages/TablePage";
import Route from "../components/Route";
import CounterPage from "../pages/CounterPage";
import CounterPageWithReducer from "../pages/CounterPageWithReducer";

export default function RouteLinks() {
  return (
    <div className="col-span-5">
      <Route path="/accordion">
        <AccordionPage />
      </Route>

      <Route path="/">
        <DropdownPage />
      </Route>

      <Route path="/buttons">
        <ButtonPage />
      </Route>

      <Route path="/modal">
        <ModalPage />
      </Route>

      <Route path="/table">
        <TablePage />
      </Route>

      <Route path="/counter">
        <CounterPage initialCount={10} />
      </Route>

      <Route path="/counter-with-reducer">
        <CounterPageWithReducer initialCount={1} />
      </Route>
    </div>
  );
}
