import React, {useRef, useEffect, useState, useCallback} from 'react';
import {View, ScrollView, StyleSheet, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';

import WordCard from './WordCard';

const wordsList = ['one', 'two', 'three', 'box', 'mix', 'fox', 'up', 'are', 'four', 'five', 'lunch'];
type DataDecision = 1 | -1 | 0;
const decideData = (viewWidth: number, contentWidth: number, scrollPosition: number): DataDecision => {
  if (scrollPosition >= contentWidth - viewWidth) return 1;
  if (scrollPosition < viewWidth) return -1;
  return 0;
};

const App = () => {
  const [viewWidth, setViewWidth] = useState<number>(0);
  const [data, setData] = useState<string[]>(wordsList);
  const wordListContainer = useRef<View | null>();
  const scrollViewRef = useRef<ScrollView | null>();

  useEffect(() => {
    const measureView = () => wordListContainer.current?.measure((_, __, width) => setViewWidth(width));
    measureView();
    window.addEventListener('resize', measureView);
    return () => window.removeEventListener('resize', measureView);
  }, []);

  const onScroll = useCallback(
    ({
      nativeEvent: {
        contentSize: {width},
        contentOffset: {x},
      },
    }: NativeSyntheticEvent<NativeScrollEvent>) => {
      const direction = decideData(viewWidth, width, x);
      if (direction === 1) setData(current => current.concat(wordsList));
      if (direction === -1) {
        setData(current => wordsList.concat(current));
        scrollViewRef.current?.scrollTo({x: viewWidth * wordsList.length, animated: false});
      }
    },
    [viewWidth],
  );

  return (
    <View style={styles.container} ref={ref => (wordListContainer.current = ref)}>
      <ScrollView
        ref={ref => (scrollViewRef.current = ref)}
        horizontal
        directionalLockEnabled
        disableIntervalMomentum
        removeClippedSubviews
        pagingEnabled
        decelerationRate="fast"
        contentContainerStyle={styles.scrollView}
        onScroll={onScroll}
        scrollEventThrottle={1000}
      >
        {data.map((word, index) => (
          <WordCard key={`${index.toString()}_${word}`} word={word} width={viewWidth} />
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
