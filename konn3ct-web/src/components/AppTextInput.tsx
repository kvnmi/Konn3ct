export default function AppTextInput({
  inputStyes,
  icon,
  ...otherProps
}: TextInputProps) {
  return (
    <div className="flex gap-y-1 flex-col w-full font-medium text-xs md:text-sm">
      <div
        className={`${inputStyes} flex gap-4 px-3 w-full py-3.5 border items-center border-[#68A48B] bg-transparent focus:outline-none rounded-lg text-sm truncate`}
      >
        {icon && <div>{icon}</div>}
        <input
          {...otherProps}
          className={`focus:outline-none flex-1 bg-transparent ${otherProps.className}`}
        />
      </div>
    </div>
  );
}

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  inputStyes?: HTMLInputElement["className"];
  icon?: React.ReactNode;
}
