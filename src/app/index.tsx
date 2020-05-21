import React, {useRef, useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import WordCard from './WordCard';

const wordsList = ['one', 'two', 'three', 'box', 'mix', 'fox', 'up', 'are', 'four', 'five', 'lunch'];

const App = () => {
  const [viewWidth, setViewWidth] = useState<number>(0);
  const wordListContainer = useRef<View | null>();

  useEffect(() => {
    const measureView = () => wordListContainer.current?.measure((_, __, width) => setViewWidth(width));
    measureView();
    window.addEventListener('resize', measureView);
    return () => window.removeEventListener('resize', measureView);
  }, []);

  return (
    <View style={styles.container} ref={ref => (wordListContainer.current = ref)}>
      <ScrollView pagingEnabled contentContainerStyle={styles.scrollView} horizontal>
        {wordsList.map(word => (
          <WordCard key={word} word={word} width={viewWidth} />
        ))}
      </ScrollView>
    </View>
  );
};

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
