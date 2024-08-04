"use client";

import ThreeDScene from "../components/characters/scene";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { InfoPanel } from "../components/info/infoPanel";

export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-slate-900 flex items - center justify - center">
      <ThreeDScene className="absolute inset-0" />
      <div className="absolute top-0 2 m-4"></div>
      <InfoPanel />
      <Header />
      <Footer />
    </main>
  );
}
