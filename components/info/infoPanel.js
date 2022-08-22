import Image from 'next/image';
import React, { useState } from 'react';


export function InfoPanel() {
    const [isShown, setIsShown] = useState(false);

    return (
        <div
            id="personal_info"
            className="absolute h-10 aspect-square content-center rounded-xl left-4 top-4"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
        >
            {isShown && (
                <div className="absolute w-64 bg-slate-800 text-left rounded-xl left-10 top-10 py-4 px-4">
                    Roboticist. <br />
                    Rick and Morty fan. <br />
                    Data scientist wannabe. <br />
                    Web developer wannabe. <br />
                </div>
            )}
            <Image src="/icons/info.svg" alt="Info icon" layout="fill" />
        </div>
    )
}