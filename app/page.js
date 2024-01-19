import Image from 'next/image'
import Herosection from './components/Herosection'
import Clients from './components/Clients'
// import Herofaq from './components/Herofaq'

export default function Home() {
  return (
    <main className="bg-light h-full">
      < Herosection />
      < Clients/>
    </main>
  )
}
