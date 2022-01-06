import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';

import { getPeopleDetails } from '../api/movieDb';

const People = ({ route, favPeople, dispatch }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [people, setPeople] = useState(null);
  
    useEffect(() => {
        requestPeople();
    }, []);
  
    // Pourrait être directement déclarée dans useEffect
    const requestPeople = async () => {
      try {
        const movieDbRestaurantResult = await getPeopleDetails(route.params.peopleID);
        setPeople(movieDbRestaurantResult);
        setIsLoading(false);
      } catch (error) {
      }
    }

    const savePeople = async () => {
        const action = { type: 'SAVE_PEOPLE', value: route.params.peopleID };
        dispatch(action);
      }
    
      const unsavePeople = async () => {
        const action = { type: 'UNSAVE_PEOPLE', value: route.params.peopleID };
        dispatch(action);
      }

      const displaySavePeople = () => {
        if (favPeople.findIndex(i => i === route.params.peopleID) !== -1) {
          // Le restaurant est sauvegardé
          return (
            <Button
              title='Retirer des favoris'
              onPress={unsavePeople}
            />
          );
        }
        // Le restaurant n'est pas sauvegardé
        return (
          <Button
            title='Ajouter aux favoris'
            onPress={savePeople}
          />
        );
      }

  return (
    (isLoading ?
        (<View style={styles.containerLoading}>
        </View>) :

              (<ScrollView>
                <View >
                  <View >
                    <Text>
                      {people.name}
                    </Text>
                  </View>

                  <View >
                    <Text>
                    Birth: {people.birthday} ({people.place_of_birth})
                  </Text>
                  </View>

                  <View >
                    <Text>
                    Death: {people.deathday}
                    </Text>
                  </View>

                  <View >
                    <Text>
                    Play in: 
                    </Text>
                  </View>

                  <View >
                    <Text>
                    Biography: {people.biography}
                    </Text>
                  </View>
       
                {displaySavePeople()}
                </View>
                
              </ScrollView>)
  )
  )
};

const mapStateToProps = (state) => {
    return {
      favPeople: state.favPeopleID
    }
  }
  
export default connect(mapStateToProps)(People);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});