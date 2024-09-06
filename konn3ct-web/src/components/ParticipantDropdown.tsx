import { ChevronDown, ChevronUp, HandSVG, Participant } from "@/assets/svgs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import DropdownMenuItem from "./DropdownMenuItem";

interface props {
  placeholder: string;
  data: string[];
}

export default function ParticipantDropdown({ placeholder, data = [] }: props) {
  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md border border-[#68A48B] py-1.5 px-3 text-xs/6 font-semibold text-[#F5F9FFF2]">
          {({ active }) => (
            <div className="flex gap-2 items-center">
              <h1>{data[0] ?? placeholder}</h1>
              {active ? (
                <ChevronUp width={14} height={14} />
              ) : (
                <ChevronDown width={14} height={14} />
              )}
            </div>
          )}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom start"
          className="w-52 z-50 mt-2 origin-top-right rounded-xl border border-[#68A48B] bg-[#5D957E] text-sm/5 text-[#F5F9FFF2]"
        >
          <MenuItem>
            <DropdownMenuItem
              item="Everyone"
              SvgComponent={Participant}
              size={20}
            />
          </MenuItem>
          <div className="border-b border-[#3E8466]">
            <MenuItem>
              <DropdownMenuItem
                item="Raised Hand"
                SvgComponent={HandSVG}
                size={18}
              />
            </MenuItem>
          </div>
          {["Akanji Joseph (Host)", "Samuel Odejinmi", "Femi Williams"].map(
            (item, index) => (
              <MenuItem key={index}>
                <DropdownMenuItem item={item} />
              </MenuItem>
            )
          )}
        </MenuItems>
      </Menu>
    </div>
  );
}
