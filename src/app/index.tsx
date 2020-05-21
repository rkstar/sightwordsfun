import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import WordCard from './WordCard';

const wordsList = ['one', 'two', 'three', 'box', 'mix', 'fox', 'up', 'are', 'four', 'five', 'lunch'];

const App = () => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView} horizontal>
      {wordsList.map(word => (
        <WordCard key={word} word={word} />
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0288d1',
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default App;
