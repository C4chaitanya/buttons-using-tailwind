import Button from "../components/Button";
import { GoBell, GoDatabase, GoDeviceCameraVideo } from "react-icons/go";

export default function ButtonPage() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleMouseOver = () => {
    console.log("Mouse over button!");
  };
  return (
    <div className="p-5 flex gap-4">
      <section>
        <h3 className="mb-5">Primary</h3>
        <div>
          <Button primary onClick={handleClick} className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button secondary onMouseOver={handleMouseOver} className="mb-5">
            <GoDatabase />
            Primary
          </Button>
        </div>
        <div>
          <Button success className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
        <div>
          <Button warning className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button danger className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-5"> Rounded</h3>
        <div>
          <Button primary rounded onClick={handleClick} className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button
            secondary
            rounded
            onMouseOver={handleMouseOver}
            className="mb-5"
          >
            <GoDatabase />
            Primary
          </Button>
        </div>
        <div>
          <Button success rounded className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
        <div>
          <Button warning rounded className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button danger rounded className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-5"> rounded & Outline</h3>
        <div>
          <Button
            primary
            outline
            rounded
            onClick={handleClick}
            className="mb-5"
          >
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button
            secondary
            outline
            rounded
            onMouseOver={handleMouseOver}
            className="mb-5"
          >
            <GoDatabase />
            Primary
          </Button>
        </div>
        <div>
          <Button success outline rounded className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
        <div>
          <Button warning outline rounded className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button danger outline rounded className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
      </section>

      <section>
        <h3 className="mb-5">Outline</h3>
        <div>
          <Button primary outline onClick={handleClick} className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button
            secondary
            outline
            onMouseOver={handleMouseOver}
            className="mb-5"
          >
            <GoDatabase />
            Primary
          </Button>
        </div>
        <div>
          <Button success outline className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
        <div>
          <Button warning outline className="mb-5">
            <GoBell />
            Primary
          </Button>
        </div>
        <div>
          <Button danger outline className="mb-5">
            <GoDeviceCameraVideo />
            Primary
          </Button>
        </div>
      </section>
    </div>
  );
}
