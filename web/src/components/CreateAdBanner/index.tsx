import { MagnifyingGlassPlus as Search} from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'


export const CreateAdBanner = ()=>{
    return (
        <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
            <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
                <div>
                    <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
                    <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
                </div>
                <Dialog.Trigger>
                    <button className="py-3 px-4 bg-violet-500 text-white rounded-md hover:bg-violet-600 
                        transition duration-500 flex items-center gap-3">
                        <Search size={24}/>
                        Publicar anúncio
                    </button>
                </Dialog.Trigger>
            </div>
        </div>
    )
}