import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SpongeBobScreen from './SpongeBobScreen'
import OnePieceScreen from './OnePieceScreen'
import SpongeBobProbabilityScreen from './SpongeBobProbabilityScreen'
import OnePieceProbabilityScreen from './OnePieceProbabilityScreen'

const Stack = createStackNavigator();

export function SpongeBobStack(){
    return(
    <Stack.Navigator
        initialRouteName='SpongeBob'
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="SpongeBob" component={SpongeBobScreen}/>
        <Stack.Screen name="SpongeBobProbability" component={SpongeBobProbabilityScreen}/>
    </Stack.Navigator>
    )
}

export function OnePieceStack(){
    return(
    <Stack.Navigator
        initialRouteName='OnePiece'
        screenOptions={{
            headerShown:false,
        }}
    >
        <Stack.Screen name="OnePiece" component={OnePieceScreen}/>
        <Stack.Screen name="OnePieceProbability" component={OnePieceProbabilityScreen}/>
    </Stack.Navigator>
    )
}


