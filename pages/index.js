import { Layout } from '../components/layouts/layout'
import { Character } from '../components/character'

export default function Home() {
  return (
    <Layout>
      <main className="h-screen bg-slate-900">
        <Character />
      </main>
    </Layout>
  )
}
