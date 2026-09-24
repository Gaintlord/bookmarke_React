// import { VisibleEye } from "../accets/svgs/passwordEye";
import { useState } from "react";
import { ClosedEye, OpenEye } from "../accets/svgs/passwordEye";
import QuestionMark from "../accets/svgs/questionMark";

export const ModernInput = ({
  placeholder,
  type,
  className,
  forType,
  toolTipMsg,
  typeIcon,
  propRef,
  isNull,
  isError,
  userError,
  forPassword,
}: {
  placeholder: string;
  type: string;
  className: string;
  forType: string;
  toolTipMsg: string;
  typeIcon: React.ReactNode;
  propRef?: React.RefObject<HTMLInputElement | null>;
  isNull?: boolean;
  isError?: boolean;
  userError?: string;
  forPassword?: boolean;
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className={` text-black w-full max-h-max ${className} `}>
        <div className="flex flex-row justify-between">
          <div>
            <span className="text-gray-600 text-[80%] ml-1 font-mono font-medium">
              {forType}
            </span>
            <span className="text-blue-500 ml-1">*</span>
          </div>
          <span className="text-right mr-2 text-red-400 font-mono font-medium text-sm mt-1">
            {isError ? `${userError}` : ``}
          </span>
        </div>
        {/* {isError ? ``} */}
        <div className="flex flex-row">
          {/* <div className="size-5 mx-2 opacity-55 ">{typeIcon}</div> */}
          {/* main input */}
          <div
            className={`w-full rounded-lg  flex items-center justify-center font-mono font-light shadow-md ring-1 focus-within:ring-2 focus-within:ring-blue-400 
              ${isNull || isError ? `ring-red-400` : `ring-gray-400`}`}
          >
            {/* TypeIcon */}
            <div className="size-5 mx-2  flex opacity-55 ">{typeIcon}</div>
            {/* Input */}
            <input
              placeholder={placeholder}
              type={showPass ? "text" : type}
              ref={propRef}
              className="w-full placeholder:text-gray-300 place pl-2 pr-12 py-1 focus:outline-none "
            />

            {forPassword ? (
              <span
                className="w-8"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? (
                  <OpenEye />
                ) : (
                  <div className="pt-2">
                    <ClosedEye />
                  </div>
                )}
              </span>
            ) : (
              <></>
            )}
            <div className="peer size-6 mx-4  cursor-pointer">
              <span className="peer opacity-55  text-red-500 group">
                <QuestionMark
                  strokeColor={`${isNull || isError ? "#ff0000" : "#000000"}`}
                ></QuestionMark>
                <div className="bg-black -mt-12 -ml-6 font-bold rounded-md text-white text-sm w-max px-3 text-center opacity-0 group-hover:opacity-100 duration-300">
                  {toolTipMsg}
                </div>
              </span>
            </div>
          </div>
          {/* main input */}
        </div>
      </div>
    </>
  );
};
