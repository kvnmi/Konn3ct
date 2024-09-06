import Image from "next/image";
import { Inter } from "next/font/google";
import {
  CaptionSVG,
  HandSVG,
  MessageSVG,
  MicrophoneSVG,
  VideoSVG,
  PhoneSVG,
  Recording,
  RecordSVG,
  RobotSVG,
  MoreSVG,
  Participant,
  ShareScreenSVG,
  ShareSVG,
} from "@/assets/svgs";

import ParticipantPopUp from "@/components/ParticipantPopUp";
import ParticipantAvatar from "@/components/ParticipantAvatar";
import { useState } from "react";
import ChangeRoleModal from "@/components/modals/ChangeRoleModal";
import UserParticipant from "@/components/UserParticipant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [popupVisible, setPopupVisible] = useState(false);
  const [changeRoleModalVisible, setChangeRoleModalVisible] = useState(false);
  const [removePartyVisible, setRemovePartyVisible] = useState(false);

  return (
    <main
      className={`flex min-h-screen text-black bg-[#E5E5E5] flex-col ${inter.className}`}
    >
      <header className="bg-white border-b border-[#C4C4C4] flex justify-between py-6 px-[55px]">
        <div className="flex items-center gap-2.5">
          <Image
            alt="logo"
            src={"/images/logo.png"}
            width={144}
            height={48}
            className="object-contain h-12 w-36"
          />
          <div className="border-l border-[#2D3440] py-0.5 pl-4">
            <h1 className="text-[#373131] font-medium leading-[21.78px]">
              Lagos State Tech Summit 2023
            </h1>
            <h3 className="text-sm text-[#ACACAC] leading-[16.94px]">
              June 12th, 2023
            </h3>
          </div>
        </div>

        <div className={"flex gap-2.5"}>
          <div className="border border-[#424242] rounded-xl flex items-center gap-2 py-3 px-4">
            <Recording />
            <h1>Start Recording</h1>
          </div>
          <div
            className={`border border-[#424242] cursor-pointer rounded-xl flex items-center gap-2 py-3 px-4 ${
              popupVisible && "bg-[#5D957E]"
            }`}
            onClick={() => setPopupVisible(!popupVisible)}
          >
            <Participant color={popupVisible ? "white" : "#424242F2"} />
            <h1
              className={`${popupVisible ? "text-white" : "text-[#424242F2]"}`}
            >
              5
            </h1>
          </div>
        </div>
      </header>

      <section className="flex-1 flex bg-transparent px-10 relative py-2">
        <div className="flex-1 bg-white flex flex-col py-8 px-[50px]">
          <div className="flex justify-center gap-2 mb-4">
            <ParticipantAvatar name="Ajanki J" active />
            <ParticipantAvatar name="Debbie W" />
            <ParticipantAvatar name="Samuel 0" />
          </div>
          <div className="flex flex-1 justify-between gap-5">
            <UserParticipant src={"/images/vidcallav_left.jpeg"} />
            <UserParticipant
              src={"/images/vidcallav_right.jpeg"}
              isParticipant
              onClick={() => setRemovePartyVisible(true)}
            />
          </div>
        </div>

        {popupVisible && (
          <ParticipantPopUp onClick={() => setChangeRoleModalVisible(true)} />
        )}
      </section>

      <footer className="bg-[#227451] flex items-center justify-between py-6 px-12">
        <div className="flex items-center justify-between gap-6">
          {leftIcons.map((item, index) => (
            <div
              className="border rounded-full h-12 w-12 flex items-center justify-center"
              key={index.toString()}
            >
              <item.icon />
            </div>
          ))}
        </div>
        <div className="flex gap-6">
          <div className="flex items-center justify-between gap-6">
            {middleLeftIcons.map((item, index) => (
              <div
                className="border rounded-full h-12 w-12 flex items-center justify-center"
                key={index.toString()}
              >
                <item.icon />
              </div>
            ))}
          </div>
          <div className="flex rounded-full items-center w-[88px] justify-between bg-[#CC525F] p-2">
            <PhoneSVG />
            <div className="border h-6 border-[#00000033]" />
            <MoreSVG />
          </div>
        </div>
        <div className="flex items-center justify-between gap-6">
          {rightIcons.map((item, index) => (
            <div
              className="border rounded-full h-12 w-12 flex items-center justify-center"
              key={index.toString()}
            >
              <item.icon />
            </div>
          ))}
        </div>
      </footer>

      {changeRoleModalVisible && (
        <ChangeRoleModal
          active={changeRoleModalVisible}
          onClose={() => setChangeRoleModalVisible(false)}
        />
      )}
      {removePartyVisible && (
        <ChangeRoleModal
          active={removePartyVisible}
          onClose={() => setRemovePartyVisible(false)}
        />
      )}
    </main>
  );
}

const leftIcons = [{ icon: ShareSVG }, { icon: RecordSVG }, { icon: RobotSVG }];
const middleLeftIcons = [
  { icon: MicrophoneSVG },
  { icon: VideoSVG },
  { icon: ShareScreenSVG },
  { icon: MoreSVG },
];

const rightIcons = [
  { icon: HandSVG },
  { icon: CaptionSVG },
  { icon: MessageSVG },
];
