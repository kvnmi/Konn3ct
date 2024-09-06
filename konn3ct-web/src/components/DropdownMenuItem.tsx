import React from "react";

interface MenuConfigItem {
  item: string;
  SvgComponent?: React.FC<SvgProps>;
  size?: number;
  onClick?: () => void;
}

const DropdownMenuItem = ({
  item,
  SvgComponent,
  size,
  onClick,
}: MenuConfigItem) => (
  <button
    onClick={onClick}
    className="flex w-full font-semibold items-center gap-2 p-4 text-sm/5 text-[#F5F9FFF2]"
  >
    {SvgComponent && (
      <SvgComponent height={size || 14} width={size || 14} color="#fff" />
    )}
    {item}
  </button>
);

export default DropdownMenuItem;
