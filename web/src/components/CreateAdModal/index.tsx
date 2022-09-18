import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import {Check, GameController} from 'phosphor-react'
import { Input }  from '../Input'
import { Field } from '../Field'
import { FieldGroup } from '../FieldGroup'
import {WeekDays} from '../../utils/WeekDays'
import { IGame } from '../GameCard'
import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'

export const CreateAdModal = ()=>{
    const [games, setGames] = useState<IGame[]>([])
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [useVoice, setUseVoice] = useState<boolean>(false)
    useEffect(()=>{
      axios('http://localhost:3333/games')
        .then(res => {
          setGames(res.data)
        })
    },[])

    const handleCreateAd = async(e: FormEvent)=>{
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(data, weekDays, useVoice)
        try{
            const res = await axios.post(`http://localhost:3333/games/${data.gameId}/ads`,{
                name : data.name,
                yearsPlaying: Number(data.yearsPlaying),
                discord: data.discord,
                hourStart: data.hourStart,
                hourEnd: data.hourEnd,
                weekDays:weekDays,
                useVoiceChannel:useVoice
            })
            alert("Inserido com sucesso")

        }catch(e){
            console.error(e)
            alert("Falha ao inserir")
        }
    }
    return(
        <Dialog.Portal>
                <Dialog.Overlay className='bg-black/60 inset-0 fixed'>
                    <Dialog.Content 
                        className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
                        <Dialog.Title
                            className='text-3xl text-white font-black'
                        >Publique um anúncio</Dialog.Title>
                        <form onSubmit={handleCreateAd} className='mt-8 flex flex-col gap-4'>
                            <Field>
                                <label htmlFor='game' className='font-semibold'>Qual o game?</label>
                                <select
                                    required
                                    className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 appearance-none'
                                    id='game'
                                    name='gameId'
                                    defaultValue=''
                                >
                                    <option
                                        disabled 
                                        value="">Selecione o game que deseja jogar</option>
                                        {games.map(game=>(
                                            <option key={game.id} value={game.id}>{game.title}</option>
                                        ))}
                                </select>
                                
                            </Field>
                            <Field>
                                <label htmlFor="name">Seu nome (ou nickname)</label>
                                <Input  name='name' required id='name' placeholder='Como te chamam dentro do game' />
                            </Field>
                            <FieldGroup>
                                <Field>
                                    <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                                    <Input required name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser Zero' />
                                </Field>
                                <Field>
                                    <label htmlFor="discord">Qual seu Discord?</label>
                                    <Input id='discord' name='discord' placeholder='Usuário#0000'/>
                                </Field>
                            </FieldGroup>
                            <FieldGroup className='gap-6'>
                                <Field>
                                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                                    <ToggleGroup.Root 
                                        className='grid grid-cols-4 gap-1'
                                        type='multiple'
                                        onValueChange={setWeekDays}
                                        value={weekDays}
                                    >
                                            {WeekDays.map(day=>(
                                                <ToggleGroup.Item
                                                    key={day.id}
                                                    value={day.id}
                                                    className={`w-8 h-8 rounded ${weekDays.includes(day.id)?'bg-violet-500':'bg-zinc-900'}`}
                                                    title={day.title}
                                                >
                                                    {day.label}
                                                </ToggleGroup.Item>
                                            ))}
                                    </ToggleGroup.Root>
                                </Field>
                                <Field flex1>
                                    <label htmlFor="hourStart">Qual horário do dia?</label>
                                    <FieldGroup gap={1}>
                                        <Input required name='hourStart' id='hourStart' type="time" placeholder='De'/>
                                        <Input required id='hourEnd' name='hourEnd' type="time" placeholder='Até'/>
                                    </FieldGroup>
                                </Field>
                            </FieldGroup>
                            <div className='mt-2 flex gap-2 text-sm items-center'>
                                <Checkbox.Root
                                    defaultChecked={useVoice}
                                    onCheckedChange={(checked:boolean)=>setUseVoice(checked)}
                                    className="w-6 h-6 p-1 rounded bg-zinc-900">
                                   <Checkbox.Indicator>
                                        <Check className='w-4 h-4 text-emerald-400' />
                                   </Checkbox.Indicator>
                                </Checkbox.Root>
                                <label htmlFor="useVoiceChannel">Costumo me conectar ao chat de voz</label>
                            </div>
                            <footer className='mt-4 flex justify-end gap-4'>
                                <Dialog.Close 
                                    type='button'
                                    className='flex flex-row justify-center items-center bg-zinc-500  px-5 h-12 rounded-md font-semibold gap-3 hover:bg-zinc-600'
                                >Cancelar</Dialog.Close>
                                <button type='submit' className='flex flex-row px-5 h-12 rounded-md font-semibold gap-3 justify-center items-center bg-violet-500 hover:bg-violet-600'>
                                    <GameController size={24}/>
                                    Enconstrar Duo</button>

                            </footer>
                        </form>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
    )
}