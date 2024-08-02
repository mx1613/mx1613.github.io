import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

interface InfoPanelProps {
  readonly isDarkMode?: boolean;
}

export function InfoPanel({ isDarkMode = false }: InfoPanelProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="w-screen h-screen flex items-start justify-start p-4">
      <div
        id="personal_info"
        className="absolute h-10 aspect-square content-center rounded-full shadow-lg top-4 left-20"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        {isDarkMode ? (
          <Image src="/icons/info-dark.svg" alt="Info icon" fill />
        ) : (
          <Image src="/icons/info-light.svg" alt="Info icon" fill />
        )}
      </div>
      {isShown && (
        <div
          className={clsx(
            "absolute mt-12 ml-8 w-fit left-20",
            {
              "bg-white text-slate-900": isDarkMode,
              "bg-slate-900 text-white": !isDarkMode,
            },
            "text-left rounded-xl py-8 px-8",
          )}
        >
          🤔 I love to solve problems. <br />
          🤖 Roboticist by training. <br />
        </div>
      )}
    </div>
  );
}
