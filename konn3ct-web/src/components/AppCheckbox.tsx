import { Checkbox } from "@headlessui/react";
import { useState } from "react";

export default function AppCheckbox() {
  const [enabled, setEnabled] = useState(true);

  return (
    <Checkbox
      checked={enabled}
      onChange={setEnabled}
      className="group size-6 rounded-md bg-transparent p-1 ring-1 ring-white/15 ring-inset "
    >
      {enabled && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      )}
    </Checkbox>
  );
}
