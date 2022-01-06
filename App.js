import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PeopleList from './src/components/PeopleList';
import Search from './src/components/Search';

import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation/Navigation';
import { Provider } from 'react-redux';
import Store from './src/store/config';

export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Navigation />
      <StatusBar style="auto" />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
