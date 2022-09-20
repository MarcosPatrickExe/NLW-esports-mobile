import React, { useEffect,useState } from 'react';
//import { View } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background/index';
import { useRoute, useNavigation } from '@react-navigation/native';
// 'useRoute' PERMITE QUE O COMPONENTE ACESSE OS VALORES DAS PROPRIEDADES PASSADAS À ELE PELO MÉTODO 'navigation.navigate()'

import { GameParams } from '../../@Types/navigation';
import { TouchableOpacity, View, Image, FlatList, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading/index';
//import { GAMES } from '../../utils/games';
import { DuoCard, DuoCardProps } from '../../components/DuoCard/index';


// react-native-vector-icons




export function Game() {

  const [ads, setAds] = useState<DuoCardProps[]>([]);
  const navigation = useNavigation();
  const route = useRoute(); // INSTANCIANDO OBJETO RESPONSAVEL PELO RECEBIMENTO DAS INFORMAÇÕES DO COMPONENTE 'Home'
  const game = route.params as GameParams;// RECEBENDO OS VALORES ADVINDOS DAS PROPRIEDADES
 

  function handleGoBack(){
       navigation.goBack();
  }


  useEffect(()=>{

      // REQUISITANDO TODOS OS ANÚNCIOS RELACIONADOS À UM GAME:
      fetch(`http://192.168.3.6:3333/games/${game.id}/ads`)
          .then( response => response.json())
          .then( (data: DuoCardProps[] )=> setAds(data) )
          .catch( (error)=> console.log( error) );
  }, []);


  
  return (
    <Background>
         <SafeAreaView style={ styles.container}>

            <View style={ styles.header}>
                  <TouchableOpacity onPress={ handleGoBack}>
                      <Entypo 
                        name="chevron-thin-left"
                        color={ THEME.COLORS.CAPTION_300 }
                        size= {20}
                      />
                  </TouchableOpacity>

                  <Image 
                        source={ logoImg}
                        style={ styles.logo}
                   />

                   <View style={styles.right} />
            </View>


            <Image
                source={ {uri: game.bannerUrl} }
                style={ styles.cover }
                resizeMode="cover"
            />


            <Heading 
                style={ styles.title }
                title={ game.title }
                subtitle="Conecte-se e comece a jogar!!"
            />
           

           {/* RENDERIZANDO OS ANÚNCIOS VINCULADOS À CADA GAME: */}
            <FlatList
                data = {ads}
                keyExtractor={ item => item.id} 
                renderItem={ 
                    ({item})=>(
                          <DuoCard key={item.id} data={ item } onConnect={ ()=>{} } />
                    )
                }
                horizontal={true}
                style={ styles.containerList}
                contentContainerStyle={ [ (ads.length > 0) ? styles.contentList : styles.emptyListContent ]  }
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={ ()=>(
                    <Text style={ styles.emptyListText }>
                        Não há anúncios publicados  para esse jogo ainda :/
                    </Text>
                )}
            />

         </SafeAreaView>
    </Background>
  );
}