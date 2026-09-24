import type {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
} from "react";

export const OtpBox = (props: {
  reff: RefObject<HTMLInputElement | null>;
  nextreff: RefObject<HTMLInputElement | null> | null;
  prevreff: RefObject<HTMLInputElement | null> | null;
  isInputError?: boolean;
}) => {
  const handleEnter = (
    e: ChangeEvent<HTMLInputElement>,
    nextreff: RefObject<HTMLInputElement | null> | null,
  ) => {
    const value = e.target.value;

    // Only allow single digit
    if (
      value === "0" ||
      value === "2" ||
      value === "3" ||
      value === "4" ||
      value === "5" ||
      value === "6" ||
      value === "7" ||
      value === "8" ||
      value === "1" ||
      value === "9"
    ) {
      e.target.value = value;
    } else {
      e.target.value = "";
      return;
    }

    // Move to next input if a number is entered
    if (value.length === 1 && nextreff?.current) {
      nextreff.current.focus();
    }
  };
  const backSpace = (
    e: KeyboardEvent<HTMLInputElement>,
    prevreff: RefObject<HTMLInputElement | null> | null,
  ) => {
    if (
      e.key === "Backspace" &&
      e.currentTarget.value === "" &&
      prevreff?.current
    ) {
      prevreff.current.focus();
    }
  };
  return (
    <>
      <div className="oswald-bold w-20 h-34 flex m-[2%] ">
        <input
          onChange={(e) => handleEnter(e, props.nextreff)}
          onKeyDown={(e) => {
            backSpace(e, props.prevreff);
          }}
          ref={props?.reff}
          placeholder="-"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className={`bg-black/5 rounded-md shadow-xl w-full h-full border-blue-200 border-2 text-[500%] text-center items-center text-black/90 caret-transparent focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-400/50
          ${props.isInputError ? `border-red-600 ` : `border-blue-200 `}`}
        />
      </div>
    </>
  );
};
