import React from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useSound from 'use-sound';

import { Layout } from '../components/layouts/layout'
import { Rick } from '../components/characters/rick';
import { Walle } from '../components/characters/walle';
import { RubikCube } from '../components/characters/rubik';
import { Gufetto } from '../components/characters/gufetto';
import { InfoPanel } from '../components/info/infoPanel';


export default function Home() {
  const [isDarkMode, setDarkMode] = React.useState(true);
  const [playClick] = useSound("/assets/sounds/switch.mp3");

  return (
    <Layout isDarkMode={isDarkMode}>
      <main className={`relative h-screen w-screen ${isDarkMode ? "bg-slate-900" : "bg-white"} flex items-center justify-cente`} >
        <Rick
          className="absolute w-80 h-72 bottom-14 right-0 rounded-full"
        />
        <Walle
          className="absolute w-80 h-72 bottom-14 left-0 rounded-full"
        />
        <RubikCube
          className="absolute w-80 h-72 top-20 left-0 rounded-full"
        />
        <Gufetto
          className="absolute w-80 h-72 top-20 right-0 rounded-full"
        />
        <div className="absolute top-0 2 m-4">
          <DarkModeSwitch
            style={{ marginBottom: '2rem' }}
            checked={isDarkMode}
            onChange={() => {
              setDarkMode(!isDarkMode);
              playClick();
            }}
            size={40}
            sunColor="#f59e0b"
            moonColor="#ffffff"
          />
        </div>
        <InfoPanel isDarkMode={isDarkMode} />
      </main>
    </Layout >
  )
}




