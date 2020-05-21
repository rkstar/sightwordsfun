import React from 'react';
import {View, StyleSheet} from 'react-native';

import WordCard from './WordCard';

const App = () => (
  <View style={styles.container}>
    <WordCard word="hi violet." />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0288d1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
