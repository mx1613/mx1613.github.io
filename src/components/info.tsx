import Image from "next/image";
import { useState } from "react";

export function Info() {
  const [isShown, setIsShown] = useState(false);
  
  return (
    <div className="w-screen h-screen flex items-start justify-start p-4">
      <div //NOSONAR
        id="personal_info"
        className="absolute h-10 aspect-square content-center rounded-full shadow-lg top-4 left-4"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Image src="/icons/info-dark.svg" alt="Info icon" fill />
      </div>
      {isShown && (
        <div
          className={
            "absolute mt-12 ml-8 w-fit left-20 bg-white text-slate-900 text-left rounded-xl py-8 px-8"
          }
        >
          <h1 className="text-2xl font-bold">TODO: fetch this from a CMS. </h1>
        </div>
      )}
    </div>
  );

}



