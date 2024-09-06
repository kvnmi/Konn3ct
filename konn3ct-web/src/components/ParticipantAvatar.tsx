import { MicrophoneBlue } from "@/assets/svgs";
import Image from "next/image";

export default function ParticipantAvatar({
  active = false,
  name,
}: {
  active?: boolean;
  name: string;
}) {
  return (
    <div
      className={`rounded-full p-0.5 flex items-center gap-2 border border-[#ACC691] bg-[#2274518C] ${
        !active && "opacity-55"
      }`}
    >
      <div className="h-6.5 w-6.5 rounded-full relative overflow-hidden">
        <Image
          alt="logo"
          className="object-cover"
          src={"/images/userav_1.png"}
          fill
        />
      </div>
      <h1 className="text-white text-sm font-medium leading-[16.94px]">
        {name}
      </h1>
      <MicrophoneBlue />
    </div>
  );
}
