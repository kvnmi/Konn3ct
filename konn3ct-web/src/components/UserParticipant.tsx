import { MicrophoneSVG, MoreSVG } from "@/assets/svgs";
import Image from "next/image";
import React from "react";

interface props {
  src: string;
  isParticipant?: boolean;
  onClick?: () => void;
}

function UserParticipant({ src, isParticipant, onClick }: props) {
  return (
    <div className="flex-1 max-w-[654px] max-h-[654px] relative overflow-hidden rounded-[20px]">
      <Image alt="logo" className="object-cover object-center" src={src} fill />
      {isParticipant && (
        <div className="absolute flex p-4 gap-2 right-0">
          <div className="h-10 w-10 flex rounded-full bg-[#CC525F] items-center justify-center">
            <MicrophoneSVG />
          </div>
          <div
            className="h-10 w-10 flex rounded-full bg-[#5D957E7A] items-center justify-center cursor-pointer"
            onClick={onClick}
          >
            <MoreSVG />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserParticipant;
