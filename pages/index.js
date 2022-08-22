import { Layout } from '../components/layouts/layout'
import { Rick } from '../components/characters/rick';
import { InfoPanel } from '../components/info/infoPanel';

export default function Home() {

  return (
    <Layout>
      <main className="relative h-screen w-screen bg-slate-900">
        <Rick className="absolute w-72 h-1/3 bottom-14 right-0 rounded-full" />
        <InfoPanel />
      </main>
    </Layout>
  )
}




