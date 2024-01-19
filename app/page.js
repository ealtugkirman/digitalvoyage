import Image from 'next/image'
import Herosection from './components/Herosection'
import Clients from './components/Clients'
import Offers from './components/Offers'
import ContactUs from './components/ContactUs'
// import Steps from './components/Steps'
export default function Home() {
  return (
    <main className="bg-light h-full font-ws ">
      < Herosection />
      < Clients />
      < Offers />
      < ContactUs />
    </main>
  )
}
