import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

interface Props {
  word: string;
}

const WordCard = ({word}: Props) => (
  <View style={styles.card}>
    <Card elevation={4}>
      <CardContent>
        <Text style={styles.text}>{word}</Text>
      </CardContent>
    </Card>
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: '60%',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 100,
    fontWeight: '900',
  },
});

export default WordCard;