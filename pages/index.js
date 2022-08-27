import React from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { Layout } from '../components/layouts/layout'
import { Rick } from '../components/characters/rick';
import { Walle } from '../components/characters/walle';
import { RubikCube } from '../components/characters/rubik';
import { Gufetto } from '../components/characters/gufetto';
import { InfoPanel } from '../components/info/infoPanel';

export default function Home() {
  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <Layout isDarkMode={isDarkMode}>
      <main className={`relative h-screen w-screen ${isDarkMode ? "bg-slate-300" : "bg-slate-900"}`} >
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
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={40}
          className="absolute top-4 right-1/2"
          moonColor="#1e293b"
          sunColor="#cbd5e1"
        />
        <InfoPanel isDarkMode={isDarkMode} />
      </main>
    </Layout >
  )
}




