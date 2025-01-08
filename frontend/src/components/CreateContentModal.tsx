import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({ open, onClose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex justify-center flex-col">
            <span className="bg-white opacity-100 p-4 flex flex-col justify-center rounded">
              <div
                className="flex justify-end cursor-pointer"
                onClick={onClose}
              >
                <CrossIcon />
              </div>
              <div>
                <Input placeholder="Title"></Input>
                <Input placeholder="Link"></Input>
              </div>
              <div className="flex justify-center">
                <Button variant="primary" text="Submit"></Button>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({
  onChange,
  placeholder,
}: {
  onChange?: () => void;
  placeholder?: string;
}) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type={"text"}
        className="px-4 py-2 rounded-md border-2 shadow-inner outline-none focus:border-black m-2"
        onChange={onChange}
      />
    </div>
  );
}
