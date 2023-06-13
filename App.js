import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SingIn from './src/screens/SingInScreen/SingIn';
import SingUp from './src/screens/SingUpScreen/SingUp';

const App = () =>{
  return(
    <SafeAreaView style = {styles.root}>
        <SingUp></SingUp>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: 'white',//black
  }
});

export default App;