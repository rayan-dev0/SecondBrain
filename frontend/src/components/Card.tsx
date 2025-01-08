import { ShareIcon } from "../icons/ShareIcon";

export function Card() {
  return (
    <div>
      <div className="bg-white rounded-md border-gray-100 border max-w-72 p-2">
        <div className=" flex justify-between ">
          <div className=" flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <ShareIcon />
            </div>
            Project Ides
          </div>
          <div className="flex items-center">
            <div className="pr-2 text-gray-500">
              <ShareIcon />
            </div>
            <div className="text-gray-500">
              <ShareIcon />
            </div>
          </div>
        </div>
        <div className="pt-4">
          {/* <iframe
            className="w-full rounded-md"
            src="https://www.youtube.com/embed/aGuHixFujHE?si=DFuwPWV9_8n8hVuy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <blockquote className="twitter-tweet">
            <a href="https://twitter.com/NVIDIAGeForce/status/1876660162271887711"></a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
