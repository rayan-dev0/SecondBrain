import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div className="">
      <Button
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

      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;
