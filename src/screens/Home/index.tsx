import React, { useEffect, useState } from 'react';
import { View, Image, FlatList, Text, StyleSheet } from 'react-native';
import { styles } from './style';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading'; 
import { GameCard, GameCardProps } from '../../components/GameCard';
import { GAMES } from '../../utils/games';



export function Home() {

  const [games, setGames] = useState <GameCardProps[]> ([]);

 
  useEffect(()=>{

      fetch('http://10.0.0.104:3333/games')
        .then( response => response.json())
        .then( (data)=>{
             console.dir( JSON.stringify(data, null, 4) );
             setGames(data);

        }).catch(function(error){
             console.log( "error de requisicao");
             console.log( error);
        })
        
  }, []);




  return (
    <View style={styles.container}>

        <Image 
           source={ logoImg }
           style={ styles.logo }
        />

        <Heading 
            title="Encontre seu duo!"
            subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
              data = { games }
              //data= { GAMES } // 'GAMES' CONTÉM DADOS ESTÁTICOS PARA TESTES 
              
              renderItem={ ({item})=>(
                   <GameCard data= { item } />
              )}

              keyExtractor={ item => item.id }

              showsHorizontalScrollIndicator={false}
              horizontal = {true}
              contentContainerStyle={ styles.contentList}
         />

{/*
         <View>
            { 
              games.map( (game)=>{
                  return (
                      <Text style={ { color: 'white'} }>
                          {game.title}
                      </Text>
                  )
              })  
            }
         </View>
*/}

    </View>
  );
}