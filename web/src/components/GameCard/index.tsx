interface GameCardProps {
    name: string;
    anuncios: number;
    imgUrl: string
}
const GameCard = (prop:GameCardProps)=>{
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={prop.imgUrl} alt="Game image" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">{prop.name}</strong>
            <span className="text-zinc-300 text-sm block">{prop.anuncios} anúncios</span>
          </div>
        </a>
    )
}

export default GameCard;