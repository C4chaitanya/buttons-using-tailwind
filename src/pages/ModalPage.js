import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p> Here is an important message from the business.</p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed
        fermentum massa. Quisque sed euismod orci. Sed tincidunt rutrum justo,
        eget feugiat metus fermentum pretium. Suspendisse vulputate finibus
        velit et gravida. Donec dictum tellus a velit aliquet, et ultricies nibh
        ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        ex nisl, mattis fermentum quam eu, dictum pretium est. Suspendisse
        condimentum dictum bibendum. Sed nec risus placerat, pellentesque odio
        consectetur, suscipit orci.
      </p>

      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}
