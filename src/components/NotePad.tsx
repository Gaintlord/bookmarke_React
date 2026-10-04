import type { ReactNode } from "react";
import TornPage from "../accets/svgs/tornPage";

export default function NotePad({
  children,
}: Readonly<{ children?: ReactNode }>) {
  return (
    <div className="h-full w-full text-black">
      <div className="w-[60%]">
        <TornPage />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
