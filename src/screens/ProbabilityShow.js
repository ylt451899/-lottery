import React from 'react';
import { View, Image, Text } from 'react-native';


export function ProbabilityShow(seriesName,pictureName,probability,view,images,imageText,imageProbability){
    const show = []
    show.push(
      <View style={view}>
        <Image style={images} source={seriesName[pictureName]}></Image>
        <Text style={imageText}>{pictureName}</Text>
        <Text style={imageProbability}>{probability}</Text>
      </View>
    )
    show.push(<View style={{marginLeft:10,height:1,width:390,backgroundColor:'#E0E0E0'}}></View>)
    return(show);
  }