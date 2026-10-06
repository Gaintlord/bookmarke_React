import React from "react";

export const SignInOptions = ({
  typeIcon,
  className,
  type,
  onClick,
}: {
  typeIcon: React.ReactNode;
  className: string;
  type: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`w-full py-1 flex font-mono rounded-md active:translate-y-1 duration-200 my-2 max-md:w-[95%]  ${className}`}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick?.();
        }
      }}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="size-6 sm:size-7 lg:size-8 ml-[5%] mr-[8%]">
        {typeIcon}
      </div>
      <div className="text-base sm:text-lg lg:text-xl mx-[3%]">
        Continue with
      </div>
      <div className="text-base sm:text-lg lg:text-xl font-bold">{type}</div>
    </div>
  );
};
