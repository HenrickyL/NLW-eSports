import "./styles/main.css"
// @ts-ignore
import logoImg from './assets/logo-nlw-esports.svg'
import GameCard, { IGame } from "./components/GameCard"
import { CreateAdBanner } from "./components/CreateAdBanner"
import { useEffect, useState } from "react"

function App() {
  var [games, setGames] = useState<IGame[]>([])
  useEffect(()=>{
    fetch('http://localhost:3333/games')
      .then(res=> res.json())
      .then(data => {
        setGames(data)
      })
  },[])
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game)=>(
          <GameCard key={game.id} data={game}/>
        ))}
      </div>
      <CreateAdBanner />

    </div>
  )
}

export default App
