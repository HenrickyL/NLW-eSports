export interface IGame {
    id: string;
    title: string;
    _count: {
      ads:number}
    bannerUrl: string
}
interface Prop{
  data: IGame
}
const GameCard = ({data}:Prop)=>{
    return (
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src={data.bannerUrl} alt="Game image" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">{data.title}</strong>
            <span className="text-zinc-300 text-sm block">{data._count.ads} anúncio(s)</span>
          </div>
        </a>
    )
}

export default GameCard;