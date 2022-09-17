import { View, Image, FlatList } from "react-native"
import {styles} from './styles'
import logoImage from '../../assets/logo-nlw-esports.png'
import { Heading } from "../../components/Heading"
import { GameCard, IGame } from "../../components/GameCard"
import { useEffect, useState } from "react"
import {SafeAreaView} from 'react-native-safe-area-context'
import { Background } from "../../components/Background"
import {useNavigation} from '@react-navigation/native'

export const Home = ()=>{
    const [games, setGames] = useState<IGame[]>([])
    const navigation = useNavigation()
    useEffect(()=>{
        fetch('http://192.168.18.42:3333/games')
        .then(res=> res.json())
        .then(data => {
            setGames(data)
        })
    },[])

    const handleOpenGame = (game:IGame)=>{
        navigation.navigate('game',game)
    }
    return (
        <Background>
        <SafeAreaView style={styles.container}> 
            <Image source={logoImage} style={styles.logo}/>
            <Heading title="Encontre seu duo" subtitle="Selecione o game que deseja jogar..."/>
            <FlatList contentContainerStyle={styles.contentList}
                data={games}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <GameCard 
                        data={item}
                        onPress={()=>handleOpenGame(item)}
                    />)
                }
                />

        </SafeAreaView>
        </Background>
    )
}