import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SpongeImages } from '../components/url/imagesUrl.js';
import MyButton from '../components/Button/myButton';
import { ProbabilityShow } from './ProbabilityShow';

export default function SpongeBobProbabilityScreen(props) {
  const spongeBobListName = ['patrick','spongeBob','crabBoss','squidWard'];
  const spongeBobViewList = [];
    const makeShow = () => {
      for(var i=0; i<spongeBobListName.length ; i++){
        console.log(i)
        if(i == 0 || i==1){
          spongeBobViewList.push(ProbabilityShow(SpongeImages,spongeBobListName[i],'10%',styles.view,styles.images,styles.imageText,styles.imageProbability))
        }else{
          spongeBobViewList.push(ProbabilityShow(SpongeImages,spongeBobListName[i],'40%',styles.view,styles.images,styles.imageText,styles.imageProbability))
        }
      }
      return(spongeBobViewList)
    }

    return (
      <View style={styles.container}>
        <View style={{marginLeft:30,marginTop:30,marginBottom:10}}>
          <MyButton title={'返回'} onPress={()=>props.navigation.push('SpongeBob')} style={{}} textStyle={styles.goBackText}/>
        </View>
        <View style={{marginLeft:10,height:1,width:390,backgroundColor:'#E0E0E0'}}></View>
        {makeShow()}
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      //   alignItems: 'center',
      //   justifyContent:'center',
      },
      goBackText:{
        color:'#46A3FF',
        fontSize:20,
      },
      view:{
          flexDirection:'row',
          marginLeft:40,
          margin:10,
          alignItems: 'center',
          justifyContent:'center',
          borderStyle: 'dashed',
      },
      images:{
          width:130,
          height:100,
      },
      imageText:{
          width:130,
          marginLeft:30,
          fontSize:25,
      },
      imageProbability:{
          marginLeft:20,
          width:100,
          fontSize:30,
      }
    });