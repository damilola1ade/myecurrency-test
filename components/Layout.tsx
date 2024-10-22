import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-col justify-center items-center w-full ">
        <div className="max-w-[1440px] flex flex-col justify-center items-center w-full gap-20 px-8 py-10 lg:px-32">
          {children}
        </div>
      </div>
    </div>
  );
}
