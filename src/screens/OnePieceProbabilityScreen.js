import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { onePieceImages } from '../components/url/imagesUrl.js';
import MyButton from '../components/Button/myButton';
import { ProbabilityShow } from './ProbabilityShow';


export default function SpongeBobProbabilityScreen(props) {
  const onePieceListName = ['luffy','zoro','sanji','nami'];
  const onePieceViewList = [];
    const makeShow = () => {
      for(var i=0; i<onePieceListName.length ; i++){
        console.log(i)
        if(i == 0 || i==1){
          onePieceViewList.push(ProbabilityShow(onePieceImages,onePieceListName[i],'10%',styles.view,styles.images,styles.imageText,styles.imageProbability))
        }else{
          onePieceViewList.push(ProbabilityShow(onePieceImages,onePieceListName[i],'40%',styles.view,styles.images,styles.imageText,styles.imageProbability))
        }
      }
      return(onePieceViewList)
    }

    return (
        <View style={styles.container}>
          <View style={{marginLeft:30,marginTop:30,marginBottom:10}}>
            <MyButton title={'返回'} onPress={()=>props.navigation.push('OnePiece')} style={{}} textStyle={styles.goBackText}/>
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
      },
      goBackText:{
        color:'#46A3FF',
        fontSize:20,
      },
      view:{
          flexDirection:'row',
          marginLeft:50,
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
          width:140,
          marginLeft:50,
          fontSize:25,
      },
      imageProbability:{
          width:100,
          fontSize:30,
      }
    });