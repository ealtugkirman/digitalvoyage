import Image from 'next/image'
import Herosection from './components/Herosection'
import Clients from './components/Clients'
import Offers from './components/Offers'
import ContactUs from './components/ContactUs'
import TextCom from "./components/textcom/Textcom"
// import Steps from './components/Steps'
export default function Home() {
  return (
    <main className="bg-light h-full font-ws ">
      < Herosection />
      <div className='' >
        <TextCom />
      </div>
      < Clients />
      < Offers />
      < ContactUs />
    </main>
  )
}
