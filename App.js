import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabs } from './src/screens/BottomTabs';


export default function App() {
  
  return (
    <BottomTabs></BottomTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:70,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});
