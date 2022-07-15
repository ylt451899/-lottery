import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, Text, RefreshControl} from 'react-native';
import MyButton from '../components/Button/myButton';
import { onePieceImages } from '../components/url/imagesUrl.js';
import { lottery } from '../../lottery';

export default function OnePieceScreen(props) {
  const [url,setUrl] = useState('start');
  const pictureName = ['luffy','zoro','sanji','nami']
  const [luffy, setLuffy] = useState(0);
  const [zoro, setZoro] = useState(0);
  const [sanji, setSanji] = useState(0);
  const [nami, setNami] = useState(0);
  const [Refreshing, setRefreshing] = useState(false);
  //判斷抽到哪知角色
  function getPicture(){
    const num = lottery();
    if(num == 0){
      setUrl('luffy');
      setLuffy(luffy + 1);
    }else if(num == 1){
      setUrl('zoro');
      setZoro(zoro + 1);
    }else if(num >=2 && num <=5){
      setUrl('sanji');
      setSanji(sanji + 1);
    }else{
      setUrl('nami');
      setNami(nami + 1);
    }
  }
  //顯示抽到的各個角色數量
  function cardNumber(num){
    if(num == 0){
      return(<Text style={{marginLeft:30,fontSize:35}}>{luffy}</Text>)
    }else if(num == 1){
      return(<Text style={{marginLeft:30,fontSize:35}}>{zoro}</Text>)
    }else if(num == 2){
      return(<Text style={{marginLeft:30,fontSize:35}}>{sanji}</Text>)
    }else if(num == 3){
      return(<Text style={{marginLeft:30,fontSize:35}}>{nami}</Text>)
    }
  }
  function showCard(){
    const card = [];
    card.push(<Text style={{marginTop:60,fontSize:35,textAlign:'center'}}>已獲得角色</Text>)
    for(let i = 0;i<pictureName.length;i++){
      card.push(
        <View style={{flexDirection:'row',margin:10,alignItems: 'center',justifyContent:'center'}}>
          <Image style={{height:130,width:150}} source={onePieceImages[pictureName[i]]} ></Image>
          {cardNumber(i)}
        </View>
      )
    }
    return(card)
  }
  //刷新頁面
  const onRefresh = () => {
    setRefreshing(true);
    setUrl('start');
    setLuffy(0);
    setZoro(0);
    setSanji(0);
    setNami(0);
    setRefreshing(false);
  }
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <RefreshControl refreshing = {Refreshing} onRefresh={onRefresh}/>
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
          <Image style={{height:110,width:280}} source={require('C:/Users/ylt18/OneDrive/桌面/makeButton/src/components/img/onePieceLogo.jpg')} resizeMode={'contain'}></Image>
          <MyButton title={'機率'} onPress={()=>props.navigation.push('OnePieceProbability')} style={styles.probabilityButton} textStyle={styles.probabilityText}/>
        </View>
        <Image style={{height:350,width:400,marginTop:20}} source={onePieceImages[url]} resizeMode={'contain'}></Image>
        <MyButton title={'抽獎'} onPress={()=>getPicture()} style={styles.luffyButton} textStyle={styles.luffyText}/>
        {showCard()}
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  probabilityButton:{
    marginTop:20,
    marginLeft:20,
    height:60,
    width:60,
    borderRadius:10,
    backgroundColor:'#2894FF',
    alignItems: 'center',
    justifyContent:'center',
  },
  probabilityText:{
    color:'white',
    fontSize:20,
    textAlign:'center',
  },
  luffyButton:{
    margin:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'#F75000',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  luffyText:{
    color:'#F75000',
    fontSize:22,
    textAlign:'center',
  },
});
