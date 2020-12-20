

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,

  View,
  Text,
  StatusBar,
} from 'react-native';

import {

  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/header';
import NumberButtons from './components/numberButtons';
import DisplayInp from './components/displayInp'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        
      {/* <Header></Header> */}
      <DisplayInp></DisplayInp>
      <NumberButtons></NumberButtons>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
