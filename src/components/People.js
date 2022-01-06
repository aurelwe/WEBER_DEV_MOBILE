import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const People = () => {
  return (
    <View style={styles.container}>
      <Text>
        Je suis le composant restaurant
      </Text>
    </View>
  )
};

export default People;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});