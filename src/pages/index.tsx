import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useSound from "use-sound";
import clsx from "clsx";

import { Layout } from "../components/layouts/layout";
import { InfoPanel } from "../components/info/infoPanel";
import ThreeDScene from "../components/characters/Scene";
const darkModeSwitchStyle = {
  marginBottom: "2rem",
  className: "z-50",
};

export default function Home() {
  const [isDarkMode, setDarkMode] = React.useState<boolean>(true);
  const [playClick] = useSound("/assets/sounds/switch.mp3");

  return (
    <Layout isDarkMode={isDarkMode}>
      <main
        className={clsx(
          "relative h-screen w-screen",
          { "bg-slate-900": isDarkMode, "bg-white": !isDarkMode },
          "flex items - center justify - center",
        )}
      >
        <ThreeDScene className="absolute inset-0" />
        <InfoPanel isDarkMode={isDarkMode} />
        <div className="absolute top-0 2 m-4">
          <DarkModeSwitch
            style={darkModeSwitchStyle}
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
      </main>
    </Layout>
  );
}
