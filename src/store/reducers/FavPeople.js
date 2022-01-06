const initialState = { favPeopleID: [] }

function FavPeople(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'SAVE_PEOPLE':
      nextState = {
        ...state,
        favPeopleID: [...state.favPeopleID, action.value]
      };
      return nextState || state
    case 'UNSAVE_PEOPLE':
      nextState = {
        ...state,
        favPeopleID: state.favPeopleID.filter(id => id !== action.value)
      };
      return nextState || state
    default:
      return state
  };
}

// export default FavPeople;
// import React, { useState, useEffect } from 'react';
// import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';


// const FavPeople = () => {
//     const [people, setPeople] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);

//     return (
//         <View>
//           <View >
//             <TextInput
//               placeholder='Favoris'
//             />
//           </View>
//         </View>
//       );
// }
// export default FavPeople;

// // const initialState = { favPeopleID: [] }




// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, FlatList , Text} from 'react-native';
// import { connect } from 'react-redux';

// import PeopleList from '../../components/PeopleList';

// import { getPeopleDetails } from '../../api/movieDb';

// const FavPeople = ({ navigation, favPeople }) => {

//   const [people, setPeople] = useState([]);
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   useEffect(() => {
//     refreshFavPeople();
//   }, [favPeople]); 

//   const refreshFavPeople= async () => {
//     setIsRefreshing(true);
//     let people = [];
//     try {
//       for (const id of favPeople) {
//         const movieDbSearchResult = await getPeopleDetails(id)
//         people.push(movieDbSearchResult);
//       };
//       setPeople(people);
//     } catch (error) {
//       setPeople([]);
//     }
//     setIsRefreshing(false);
//   };

//   const navigateToPeopleDetails = (peopleID) => {
//     navigation.navigate("ViewPeople", { peopleID });
//   };

//   const amIaFavPeople = (peopleID) => {
//     if (favPeople.findIndex(i => i === peopleID) !== -1) {
//       return true;
//     }
//     return false;
//   };

//   return (
//     <View style={styles.container}>
//       {
        
//           (<FlatList
//             data={people}
//             extraData={favPeople}
//             keyExtractor={(item) => item.id.toString()}
//             renderItem={({ item }) => (
//               <PeopleList
//                 peopleData={item}
//                 onClick={navigateToPeopleDetails}
//                 isFav={amIaFavPeople(item.id)} />
//             )}
//             refreshing={isRefreshing}
//             onRefresh={refreshFavPeople}
//           />)
//       }
//     </View>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     favPeople: state.favPeopleID
//   }
// }

// export default connect(mapStateToProps)(FavPeople);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 12,
//     marginTop: 16,
//   },
// });