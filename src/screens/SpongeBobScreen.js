import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ScrollView, Text, RefreshControl} from 'react-native';
import MyButton from '../components/Button/myButton';
import { SpongeImages } from '../components/url/imagesUrl.js';
import { lottery } from '../../lottery';

export default function SpongeBobScreen(props) {
  const [url,setUrl] = useState('start');
  const pictureName = ['patrick','spongeBob','squidWard','crabBoss']
  const [patrick, setPatrick] = useState(0);
  const [spongeBob, setSpongeBob] = useState(0);
  const [squidWard, setSquidWard] = useState(0);
  const [crabBoss, setCrabBoss] = useState(0);
  const [Refreshing, setRefreshing] = useState(false);
  //判斷抽到哪知角色
  function getPicture(){
    const num = lottery();
    if(num == 0){
      setUrl('patrick');
      setPatrick(patrick + 1);
    }else if(num == 1){
      setUrl('spongeBob');
      setSpongeBob(spongeBob + 1);
    }else if(num >=2 && num <=5){
      setUrl('squidWard');
      setSquidWard(squidWard + 1);
    }else{
      setUrl('crabBoss');
      setCrabBoss(crabBoss + 1);
    }
  }
  //顯示抽到的各個角色數量
  function cardNumber(num){
    if(num == 0){
      return(<Text style={{marginLeft:30,fontSize:35}}>{patrick}</Text>)
    }else if(num == 1){
      return(<Text style={{marginLeft:30,fontSize:35}}>{spongeBob}</Text>)
    }else if(num == 2){
      return(<Text style={{marginLeft:30,fontSize:35}}>{squidWard}</Text>)
    }else if(num == 3){
      return(<Text style={{marginLeft:30,fontSize:35}}>{crabBoss}</Text>)
    }
  }
  function showCard(){
    const card = [];
    card.push(<Text style={{marginTop:60,fontSize:35,textAlign:'center'}}>已獲得角色</Text>)
    for(let i = 0;i<pictureName.length;i++){
      card.push(
        <View style={{flexDirection:'row',margin:10,alignItems: 'center',justifyContent:'center'}}>
          <Image style={{height:100,width:100}} source={SpongeImages[pictureName[i]]}></Image>
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
    setPatrick(0);
    setSpongeBob(0);
    setSquidWard(0);
    setCrabBoss(0);
    setRefreshing(false);
  }
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <RefreshControl refreshing = {Refreshing} onRefresh={onRefresh}/>
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Image style={{height:110,width:210,marginLeft:80}} source={require('C:/Users/ylt18/OneDrive/桌面/makeButton/src/components/img/logo.jpg')} resizeMode={'contain'}></Image>
            <MyButton title={'機率'} onPress={()=>props.navigation.push('SpongeBobProbability')} style={styles.probabilityButton} textStyle={styles.probabilityText}/>
          </View>
          <Image style={{height:350,width:400,marginTop:20}} source={SpongeImages[url]} resizeMode={'contain'}></Image>
          <MyButton title={'抽獎'} onPress={()=>getPicture()} style={styles.patrickButton} textStyle={styles.patrickText}/>
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
  patrickButton:{
    margin:20,
    height:50,
    width:120,
    backgroundColor:'white',
    borderColor:'pink',
    borderWidth:3,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
  },
  patrickText:{
    color:'pink',
    fontSize:22,
    textAlign:'center',
  },
});
