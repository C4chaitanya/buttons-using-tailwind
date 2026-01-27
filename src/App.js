// import ButtonPage from "./pages/ButtonPage";
import Accordion from "./components/Accordion";

export default function App() {
  const items = [
    {
      id: "1",
      label: "Mobiles",
      description:
        "Mobile content includes a diverse range of digital media tailored for smartphones, primarily focusing on apps, games, images, video, music, and web browsing. Key trends include mobile-first formats like web stories, interactive content, and AR/VR. Modern smartphones also offer advanced features such as AI-powered photography, 3D effects, and enhanced security, replacing traditional cameras and music players. ",
    },
    {
      id: "2",
      label: "Watches",
      description:
        "Watches are sophisticated timekeeping instruments ranging from precise quartz to intricate mechanical, often featuring complications like calendars, chronographs, and moon phases. Modern watchmaking balances, with, Tourneau covering, metals, plastics, and inner movements, while, luxury, models emphasize craftsmanship,, design, and,, heritage. They serve as functional tools, fashion accessories, and investment pieces,, ranging from, everyday,,,, wears, to high-end, collectables. ",
    },
    {
      id: "3",
      label: "Laptops",
      description:
        "Laptops are portable personal computers that integrate all standard desktop components—display, keyboard, pointing device, and speakers—into a single, battery-powered unit. Modern laptops range from ultra-portable devices to high-performance workstations, with screen sizes typically between 11 and 17 inches. ",
    },
  ];
  return (
    <div>
      {/* <ButtonPage /> */}
      <div>
        <Accordion items={items} />
      </div>
    </div>
  );
}
