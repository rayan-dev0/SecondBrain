import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/Twitter";
import { YoutubeIcon } from "../icons/Youtube";
import { SideBarItem } from "./SideBarItems";

export function SideBar() {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 rounded-md pl-6">
      <div className="flex text-2xl pt-8  items-center">
        <div className="pr-2  text-purple-600">
          <Logo />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-4">
        <SideBarItem icon={<TwitterIcon />} text="X" />
        <SideBarItem icon={<YoutubeIcon />} text="YouTube" />
      </div>
    </div>
  );
}
