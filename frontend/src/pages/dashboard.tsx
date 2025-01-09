import { useEffect, useState } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { SideBar } from "../components/SideBar";
import { useContent } from "../hooks/useContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [modelOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  useEffect(() => {
    refresh();
  }, [modelOpen]);

  return (
    <div>
      <SideBar />
      <div className="p-4 ml-72 min-h-screen bg-slate-300 border-2">
        <CreateContentModal
          open={modelOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end gap-4">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            startIcon={<PlusIcon />}
            variant="primary"
            text="Add Content"
            key={1}
          ></Button>
          <Button
            onClick={async () => {
              const response = axios.post(
                `${BACKEND_URL}/api/v1/brain/share`,
                {
                  share: true,
                },
                {
                  headers: {
                    Authorization: localStorage.getItem("token"),
                  },
                }
              );
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
            }}
            startIcon={<ShareIcon />}
            variant="secondary"
            text="Share Brain"
            key={1}
          ></Button>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => (
            <Card type={type} title={title} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}
