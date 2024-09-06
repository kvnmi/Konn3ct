import React from "react";
import ModalComponent from "../AppModal";
import AppPicker from "../AppPicker";
import AppCheckbox from "../AppCheckbox";

interface props {
  active: boolean;
  onClose: () => void;
}

function RemoveUserModal({ active, onClose }: props) {
  return (
    <ModalComponent
      isVisible={active}
      onClose={onClose}
      shouldBeCentered
      shouldBeBlurAndDarkened
    >
      <div className="py-10 px-16 text-white select-none bg-[#3E8466] rounded-[20px] flex flex-col items-center justify-center">
        <h1 className=" text-xl/6 font-medium">Remove user (Debbie)</h1>
        <div className="mt-10 mb-12 flex gap-1.5">
          <AppCheckbox />
          <h1 className="text-sm">
            Prevent this user from rejoining the session
          </h1>
        </div>
        <div className="flex gap-6 font-medium items-center">
          <button
            className="px-8 py-3 bg-[#5D957E] rounded-lg"
            onClick={onClose}
          >
            Yes
          </button>
          <button onClick={onClose}>No</button>
        </div>
      </div>
      1
    </ModalComponent>
  );
}

export default RemoveUserModal;
