import { MicrophoneSVG, SearchSvg } from "@/assets/svgs";
import ParticipantDropdown from "./ParticipantDropdown";
import AppTextInput from "./AppTextInput";
import ParticipantOptions from "./ParticipantOptions";

export default function ParticipantPopUp({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div className="absolute right-0 text-[#F5F9FFF2] pr-10 h-full top-0">
      <div className="bg-[#3E8466] min-w-[432px] h-full p-6 rounded-2xl">
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold text-[20px]">Participants</h1>
          <ParticipantDropdown placeholder="Everyone" data={[]} />
        </div>
        <div>
          <AppTextInput
            icon={<SearchSvg />}
            placeholder="Find the person"
            inputStyes="my-4"
          />
        </div>
        <div>
          <ParticipantItem name="Akanji J" isHost isUser onClick={onClick} />
          <ParticipantItem name="Samuel 0" justJoined onClick={onClick} />
          <ParticipantItem name="Femi W" onClick={onClick} />
          <ParticipantItem name="Anita N" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

interface props {
  name: string;
  isHost?: boolean;
  isUser?: boolean;
  justJoined?: boolean;
}

function ParticipantItem({
  name,
  isHost = false,
  isUser = false,
  justJoined = false,
  onClick,
}: props & { onClick?: () => void }) {
  return (
    <div className="border-b border-[#5D957E] py-4 flex items-center justify-between">
      <div className="gap-4 flex items-center">
        <div className="rounded-full h-8 w-8 bg-[#D9D9D9] " />
        <div>
          <div className="flex font-semibold gap-2 items-center">
            <h1>{name}</h1>
            {isUser && <span>(You)</span>}
            {justJoined && (
              <span className="inline-flex text-xs/4 font-normal">
                <div className="">• Just Joined</div>
              </span>
            )}
          </div>
          <h1 className="text-xs text-[#E0ECFFCC]">
            {isHost ? "Host" : "Guest"}
          </h1>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <MicrophoneSVG height={18} width={18} />
        <ParticipantOptions onClick={onClick} />
      </div>
    </div>
  );
}
