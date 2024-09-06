import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi";

export default function AppPicker<T>({
  data,
  selectedItem,
  setSelectedItem,
  placeholder,
  disabled,
}: PickerProps) {
  return (
    <div className="w-full">
      <Listbox value={selectedItem} onChange={setSelectedItem}>
        <div className="relative  cursor-pointer">
          <Listbox.Button
            className={`relative w-full ${
              disabled && "border-red-500"
            }  rounded-lg bg-[#5D957E] border py-3 pl-3 pr-10 text-left focus:outline-none truncate sm:text-sm`}
          >
            <span className={`text-[#F5F9FFF2]`}>{data[0] || placeholder}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronDown aria-hidden="true" color="9ca3af" size={20} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              {data.map((item, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative px-4 cursor-default select-none py-2  ${
                      active ? "bg-primaryLight text-primary" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {selectedItem || ""}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

interface PickerProps {
  selectedItem?: string | null;
  setSelectedItem?: (item: string) => void;
  data: string[];
  placeholder: string;
  disabled?: boolean | object;
  label?: string;
}
