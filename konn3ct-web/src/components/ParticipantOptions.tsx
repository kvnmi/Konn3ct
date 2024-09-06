import {
  MessageSVG,
  MoreSVG,
  MuteSVG,
  RemoveUserSvg,
  SwapSVG,
} from "@/assets/svgs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import DropdownMenuItem from "./DropdownMenuItem";

const menuConfig = [
  { item: "Change Role", SvgComponent: SwapSVG },
  { item: "Mute User", SvgComponent: MuteSVG },
  { item: "Private Chat", SvgComponent: MessageSVG },
  { item: "Remove User", SvgComponent: RemoveUserSvg },
];
export default function ParticipantOptions({
  onClick,
}: {
  onClick?: () => void;
}) {
  return (
    <div className="">
      <Menu>
        <MenuButton className="focus:outline-none">
          <MoreSVG height={22} width={22} />
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-[192px] mt-4 pb-4 origin-top-right rounded-lg border border-[#5D957E] bg-[#5D957E] "
        >
          <div>
            {menuConfig.map(({ SvgComponent, item }, index) => (
              <MenuItem key={index}>
                <div className="first:border-b ">
                  <DropdownMenuItem
                    SvgComponent={SvgComponent}
                    item={item}
                    onClick={onClick}
                  />
                </div>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
}
