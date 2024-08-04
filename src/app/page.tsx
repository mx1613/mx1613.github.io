"use client";
import ThreeDScene from "../components/characters/scene";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Info } from "../components/info";


export default function Home() {
  return (
    <main className="relative h-screen w-screen bg-slate-900 flex items - center justify - center">
      <ThreeDScene className="absolute inset-0" />
      <Info />
      <Header />
      <Footer />
    </main>
  );
}








