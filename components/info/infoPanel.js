import Image from 'next/image';
import React, { useState } from 'react';


export function InfoPanel({ isDarkMode }) {
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
                    <Image src="/icons/info-dark.svg" alt="Info icon" layout="fill" /> :
                    <Image src="/icons/info-light.svg" alt="Info icon" layout="fill" />
                }
            </div>
            {isShown && (
                <div className={`absolute w-fit ${isDarkMode ? "bg-white text-slate-900" : "bg-slate-900 text-white"}  text-left rounded-xl py-8 px-8`}>
                    I love to solve problems. <br />
                    Roboticist by training. <br />
                    Rick and Morty fan. <br />
                    Gufetto lover. <br />
                </div>
            )}
        </div >
    )
}