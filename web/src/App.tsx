import "./styles/main.css"
// @ts-ignore
import logoImg from './assets/logo-nlw-esports.svg'
import GameCard from "./components/GameCard"
import {MagnifyingGlassPlus as Search} from 'phosphor-react'

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameCard name="League of Legends" imgUrl="/game-1.png" anuncios={4}/>
        <GameCard name="Apex Legends" imgUrl="/game-4.png" anuncios={4}/>
        <GameCard name="Counter Strike" imgUrl="/game-3.png" anuncios={4}/>
        <GameCard name="World of Warcraft" imgUrl="/game-6.png" anuncios={4}/>
        <GameCard name="Dota 2" imgUrl="/game-2.png" anuncios={4}/>
        <GameCard name="Fortnite" imgUrl="/game-5.png" anuncios={4}/>
      </div>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 
          transition duration-500 flex items-center gap-3">
            <Search size={24}/>
            Publicar anúncio</button>
        </div>
      </div>

    </div>
  )
}

export default App
