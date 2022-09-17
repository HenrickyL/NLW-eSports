import { SafeAreaView,View,TouchableOpacity,Image,FlatList } from 'react-native';
import { Background } from '../../components/Background';
import {useRoute,useNavigation} from '@react-navigation/native'
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import {Entypo} from '@expo/vector-icons'
import { THEME } from '../../theme';
import logoImage from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const route = useRoute()
  const navigate = useNavigation()
  const game = route.params as GameParams;

  const handleGoBack=()=>{
    navigate.goBack()
  }

  useEffect(()=>{
    fetch(`http://192.168.18.42:3333/games/${game.id}/ads`)
    .then(res=> res.json())
    .then(data => {
      setDuos(data)
    })
},[])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo 
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image 
            style={styles.logo}
            source={logoImage}/>
            <View style={styles.right}/>
        </View >
        <Image
          style={styles.cover}
          resizeMode='cover'
          source={{uri:game.bannerUrl}}/>
        <Heading 
          title={game.title}
          subtitle="Conecte-se e comece a jogar!"
        />
        <FlatList 
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          data={duos}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item=>item.id}
          renderItem={({item})=>(
            <DuoCard 
              onConnect={()=>{}}
              data={item}/>
          )}
        />
      </SafeAreaView>
    </Background>
  );
}