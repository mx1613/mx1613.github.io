import Image from 'next/image';
import React, { useState } from 'react';
import clsx from 'clsx';

interface InfoPanelProps {
    isDarkMode?: boolean;
}
  

export function InfoPanel({ isDarkMode = false }: InfoPanelProps) {
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="w-screen h-screen flex items-center justify-center" >
            <div
                id="personal_info"
                className="absolute h-10 aspect-square content-center rounded-full shadow-lg top-4"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                {isDarkMode ?
                    <Image src="/icons/info-dark.svg" alt="Info icon" fill/> :
                    <Image src="/icons/info-light.svg" alt="Info icon" fill />
                }
            </div>
            {isShown && (
                <div className={clsx("absolute w-fit",{"bg-white text-slate-900":isDarkMode, "bg-slate-900 text-white":isDarkMode}, "aatext-left rounded-xl py-8 px-8")}>
                    🤔 I love to solve problems. <br />
                    🤖 Roboticist by training. <br />
                </div>
            )}
        </div >
    )
}