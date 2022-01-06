const API_KEY = '5ffb698e3d9a8ea8d51fb8847c216058';

export async function getMovies(searchTerm = '', offset = 0) {
  try {
    const myHeaders = new Headers({ 'user-key': API_KEY });
    const url = `https://developers.zomato.com/api/v2.1/search?entity_id=${LONDON_ID}&entity_type=city&start=${offset}&q=${searchTerm}`;
    const response = await fetch(url, { headers: myHeaders });
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error with function getRestaurants ${error.message}`);
    throw error;
  }
};

// export async function getRestaurantDetails(restaurantID) {
//   try {
//     const myHeaders = new Headers({ 'user-key': API_KEY });
//     const url = `https://developers.zomato.com/api/v2.1/restaurant?res_id=${restaurantID}`;
//     const response = await fetch(url, { headers: myHeaders });
//     const json = await response.json();
//     return json;
//   } catch (error) {
//     console.log(`Error with function getRestaurantDetails ${error.message}`);
//     throw error;
//   }
// };



// export async function getRestaurants(searchTerm = '', offset = 0) {
//     try {
//       let response;
//       switch (offset) {
//         case 0:
//           console.log('0');
//           response = require('../helpers/Search-start-0.json');
//           break;
//         case 20:
//           console.log('20');
//           response = require('../helpers/Search-start-20.json');
//           break;
//         case 40:
//           console.log('40');
//           response = require('../helpers/Search-start-40.json');
//           break;
//         default:
//           console.log("default");
//           response = require('../helpers/Search-start-0.json');
//       }
//       //const json = await response.json();
//       return response;
//     } catch (error) {
//       console.log(`Error with function getRestaurants ${error.message}`);
//       throw error;
//     }
//   };