import React from "react";
import ModalComponent from "../AppModal";
import AppPicker from "../AppPicker";

interface props {
  active: boolean;
  onClose: () => void;
}

function ChangeRoleModal({ active, onClose }: props) {
  return (
    <ModalComponent
      isVisible={active}
      onClose={onClose}
      shouldBeCentered
      shouldBeBlurAndDarkened
    >
      <div className="p-6 min-w-[373px] text-white select-none bg-[#3E8466] rounded-[20px] flex flex-col">
        <h1 className="text-xl/6 font-medium">Change Role</h1>
        <h1 className="text-sm/5 text-[#E0ECFFCC]">
          Change the role of "Joy Banks" to
        </h1>

        <div className="my-6">
          <AppPicker data={[]} placeholder="Broadcaster" />
        </div>

        <div className="flex gap-8 justify-end font-medium items-center">
          <button onClick={onClose}>Cancel</button>
          <button
            className="px-8 py-3 bg-[#5D957E] rounded-lg"
            onClick={onClose}
          >
            Change Role
          </button>
        </div>
      </div>
    </ModalComponent>
  );
}

export default ChangeRoleModal;
