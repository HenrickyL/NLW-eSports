import { convertHourStringToMinutes, convertMinutesToHoursString } from './utils/convertTime';
import express from "express";
import {Ad, PrismaClient} from '@prisma/client'
import cors from 'cors'
const app = express();
app.use(express.json())
app.use(cors())

const prisma = new PrismaClient();

app.get('/games',async (req,res)=>{
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select:{
                    ads:true
                }
            }
        }
    });
    return res.status(200).json(games);
})

app.post('/games/:id/ads',async(req,res)=>{
    const gameId = req.params.id
    const body = req.body
    try{
        const response: any = await prisma.ad.create({
            data:{
                gameId:gameId,
                name: body.name,
                yearsPlaying: body.yearsPlaying,
                discord: body.discord,
                weekDays: body.weekDays.join(','),
                hourStart: convertHourStringToMinutes(body.hourStart),
                hourEnd: convertHourStringToMinutes(body.hourEnd),
                useVoiceChannel: body.useVoiceChannel,
            }
        })
        return res.status(201).json(response)
    }catch(e){
        return res.status(400).json({e})
    }
})

app.get('/ads/:id/discord',async (req,res)=>{
    try{
        const adId = req.params.id
        const ad = await prisma.ad.findUniqueOrThrow({
            select:{
                discord:true
            },
            where:{
                id: adId
            }
        })
        return res.status(200).json({
            discord: ad.discord
        })
    }catch(e){
        return res.status(400).json({
            error: e
        })
    }
})

app.get('/games/:id/ads',async (req, res)=>{
    const gameId: string = req.params.id;
    const ads = await prisma.ad.findMany({
        select:{
            id:true,
            name:true,
            weekDays:true,
            gameId:true,
            hourStart:true,
            hourEnd:true,
            useVoiceChannel:true,
            createdAt: true
        },
        where:{
            gameId: gameId
        },
        orderBy:{
            createdAt: 'asc'
        }
    })
    return res.status(200).json(ads.map(ad=>{
        return {...ad,
            weekDays: ad.weekDays.split(','),
            hourStart: convertMinutesToHoursString(ad.hourStart),
            hourEnd: convertMinutesToHoursString(ad.hourEnd),

        }

    }))
})
const port = 3333

app.listen(port,()=>{
    console.log(`run in port ${port}`)
})