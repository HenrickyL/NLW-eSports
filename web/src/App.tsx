import "./styles/main.css"
// @ts-ignore
import logoImg from './assets/logo-nlw-esports.svg'
import * as Dialog from '@radix-ui/react-dialog'
import GameCard, { IGame } from "./components/GameCard"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { useEffect, useState } from "react"
import { CreateAdModal } from "./components/CreateAdModal"
import axios from "axios"
import {useKeenSlider} from 'keen-slider/react'
import {ArrowArcLeft as Left, ArrowArcRight  as Right} from 'phosphor-react'
import "keen-slider/keen-slider.min.css"
function App() {
  var [games, setGames] = useState<IGame[]>([])
  const [sliderRef, instanceRef] = useKeenSlider()
  useEffect(()=>{
    axios('http://localhost:3333/games')
      .then(res => {
        setGames(res.data)
      })
  },[])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div ref={sliderRef} className="keen-slider grid grid-cols-6 gap-6 mt-16">
        {games.map((game)=>(
          <GameCard key={game.id} data={game}/>
        ))}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>



    </div>
  )
}

export default App
