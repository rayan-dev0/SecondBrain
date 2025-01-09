import { MouseEventHandler, useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface ModalProps {
  open: boolean;
  onClose: MouseEventHandler;
}
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

export function CreateContentModal({ open, onClose }: ModalProps) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);
  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    // onClose();
  }
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
                <Input
                  referance={titleRef}
                  type="text"
                  placeholder="Title"
                ></Input>
                <Input
                  referance={linkRef}
                  type="text"
                  placeholder="Link"
                ></Input>
              </div>
              <div>
                <p className="font-semibold flex justify-center text-lg">
                  Type :
                </p>
              </div>
              <div className="flex justify-center gap-2 py-2">
                <Button
                  onClick={() => setType(ContentType.Youtube)}
                  text="Youtube"
                  variant={
                    type === ContentType.Youtube ? "primary" : "secondary"
                  }
                ></Button>
                <Button
                  onClick={() => setType(ContentType.Twitter)}
                  text="Twitter"
                  variant={
                    type === ContentType.Twitter ? "primary" : "secondary"
                  }
                ></Button>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={addContent}
                  variant="primary"
                  text="Submit"
                ></Button>
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
