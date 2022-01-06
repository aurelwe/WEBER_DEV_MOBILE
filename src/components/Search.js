import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

// import RestaurantlistItem from '../components/RestaurantListItem';

// import Colors from '../definitions/Colors';
// import fakeRestaurants from '../helpers/fakeRestaurants';

import PeopleList from './PeopleList';
import { getMovies } from '../api/movieDb';

const Search = () => {

    const [peoples, setPeoples] = useState([]);

    const searchPeoples = async () => {
      try {
        const movieDbSearchResult = await getMovies();
        setPeoples(movieDbSearchResult.results);
      } catch (error) {
  
      }
    }

     useEffect(() => {
        searchPeoples();
    }, []);

    const navigateToPeopleDetails = () => {
        navigation.navigate("ViewPeople");
      };


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Nom du restaurant'
          style={styles.inputRestaurantName}
        />
         <Button
          title='Rechercher'
          onPress={searchPeoples}
        />
      </View>
      <FlatList
        data={peoples}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PeopleList peoplesData={item} onClick={navigateToPeopleDetails} />
        )}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    marginTop: 16,
  },
  searchContainer: {
    marginBottom: 16,
  },
  inputRestaurantName: {
    marginBottom: 8,
  },
});