import React, from 'react';
import { Layout } from '../components/layouts/layout'
import { Rick } from '../components/characters/rick';
import { Walle } from '../components/characters/walle';
import { InfoPanel } from '../components/info/infoPanel';

export default function Home() {


  return (
    <Layout>
      <main className="relative h-screen w-screen bg-slate-900">
        <Rick
          className="absolute w-80 h-72 bottom-14 right-0 rounded-full"
        />
        <Walle
          className="absolute w-80 h-72 bottom-14 left-0 rounded-full"
        />
        <InfoPanel />
      </main>
    </Layout>
  )
}




