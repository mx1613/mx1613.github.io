import Image from 'next/image';
import React, { useState } from 'react';

import { Layout } from '../components/layouts/layout'
import { Morty } from '../components/characters/morty';
import { Rick } from '../components/characters/rick';

export default function Home() {
  const [isShown, setIsShown] = useState(false);

  return (
    <Layout>
      <main className="relative h-screen w-screen bg-slate-900">
        <Rick className="absolute w-1/4 h-1/2 bottom-14 right-0 rounded-full" />
        <Morty className="absolute w-1/4 h-1/2 bottom-14 left-0 rounded-full" />

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
          <Image src="/icons/info.svg" layout="fill" />
        </div>

      </main>
    </Layout>
  )
}




