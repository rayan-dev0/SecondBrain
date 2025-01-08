import { useState } from "react";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CreateContentModal } from "./components/CreateContentModal";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  const [modelOpen, setModalOpen] = useState(true);

  return (
    <div className="p-4">
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
          startIcon={<ShareIcon />}
          variant="secondary"
          text="Share Brain"
          key={1}
        ></Button>
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          title="NVIDIA"
          link="https://x.com/NVIDIAGeForce/status/1876660162271887711"
        />
        <Card
          type="youtube"
          title="youtube"
          link="https://www.youtube.com/watch?v=Ef8-HCLi58M"
        />
      </div>
    </div>
  );
}

export default App;
