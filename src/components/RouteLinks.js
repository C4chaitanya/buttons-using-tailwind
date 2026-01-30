import AccordionPage from "../pages/AccordionPage";
import DropdownPage from "../pages/DropdownPage";
import ButtonPage from "../pages/ButtonPage";
import ModalPage from "../pages/ModalPage";
import Route from "../components/Route";

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
    </div>
  );
}
