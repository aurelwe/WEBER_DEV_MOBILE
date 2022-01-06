import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';

import Search from '../components/Search';
import People from '../components/People';
import FavPeople from '../store/reducers/FavPeople';


const SearchNavigation = createStackNavigator();
const FavNavigation = createStackNavigator();
const TabNavigation = createBottomTabNavigator();

function searchStackScreens() {
  return (
    <SearchNavigation.Navigator
      initialRouteName="ViewSearch"
    >
      <SearchNavigation.Screen
        name="ViewSearch"
        component={Search}
        options={{ title: 'Recherche' }}
      />
      <SearchNavigation.Screen
        name="ViewPeople"
        component={People}
        options={{ title: 'People' }}
      />
    </SearchNavigation.Navigator>
  )
};

function favStackScreens() {
  return (
    <FavNavigation.Navigator
      initialRouteName="ViewFav"
    >
      <FavNavigation.Screen
        name="ViewFav"
        component={FavPeople}
        options={{ title: 'Favoris' }}
      />
      <FavNavigation.Screen
        name="ViewPeople"
        component={People}
        options={{ title: 'People' }}
      />
    </FavNavigation.Navigator>
  )
};

function RootStack() {
  return (
    <TabNavigation.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <TabNavigation.Screen
        name="Recherche"
        component={searchStackScreens}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Text>Recherche</Text>;
          }
        })}
      />
      <TabNavigation.Screen
        name="Favoris"
        component={favStackScreens}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Text>Favoris</Text>;
          }
        })}
      />
    </TabNavigation.Navigator>
  );
}

export default RootStack;