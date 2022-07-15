import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SpongeBobStack, OnePieceStack } from './StackTabs'

export const BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return(<NavigationContainer>
        <Tab.Navigator
          screenOptions={({route})=>({
            tabBarIcon:({color})=>{
              if(route.name == 'SpongeBobTab'){
                return <Image style={{width:30,height:30}} source={require('C:/Users/ylt18/OneDrive/桌面/makeButton/src/components/img/spongeBobSmall.jpg')}/>
              }else if (route.name == 'OnePieceTab'){
                return <Image style={{width:50,height:30}} source={require('C:/Users/ylt18/OneDrive/桌面/makeButton/src/components/img/onePieceSmall.jpg')}/>
              }
            },
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
            headerShown:false,   
          })}
        >
          <Tab.Screen name="SpongeBobTab" component={SpongeBobStack}/>
          <Tab.Screen name="OnePieceTab" component={OnePieceStack}/>
        </Tab.Navigator>
      </NavigationContainer>);
}