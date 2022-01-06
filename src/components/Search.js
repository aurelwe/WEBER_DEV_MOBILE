import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

import PeopleList from './PeopleList';
import { getMovies, getSearchPeople } from '../api/movieDb';

const Search = ({ navigation }) => {

    const [peoples, setPeoples] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchPeoples = async () => {
      try {
        const movieDbSearchResult = await getMovies();
        // const movieDbSearchResult = await getSearchPeople(searchTerm);
        setPeoples(movieDbSearchResult.results);
      } catch (error) {
  
      }
    }

    const searchPeoplesText = async () => {
        try {
        //   const movieDbSearchResult = await getMovies();
          const movieDbSearchResult = await getSearchPeople(searchTerm);
          setPeoples(movieDbSearchResult.results);
        } catch (error) {
    
        }
      }

     useEffect(() => {
        searchPeoples();
    }, []);


      const navigateToPeopleDetails = (peopleID) => {
        navigation.navigate("ViewPeople", { peopleID });
      };


  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Nom du restaurant'
          style={styles.inputRestaurantName}
          onChangeText={(text) => setSearchTerm(text)}
        />
         <Button
          title='Rechercher'
          onPress={searchPeoplesText}
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