const API_KEY = 'f60dc1588d1b92e483f83fa137b9f5ab';

export async function getMovies(searchTerm = '', offset = 0) {
  try {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`;
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(`Error with function getMovies ${error.message}`);
    throw error;
  }
};

export async function getPeopleDetails(peopleID) {
    try {
      const url = `https://api.themoviedb.org/3/person/${peopleID}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const json = await response.json();
    //   console.log(json);
      return json;
    } catch (error) {
      console.log(`Error with function getPeopleDetails ${error.message}`);
      throw error;
    }
  };

  
export async function getSearchPeople(searchTerm = '') {
    try {
      const url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchTerm}`;
      const response = await fetch(url);
      const json = await response.json();
    //   console.log(json);
      return json;
    } catch (error) {
      console.log(`Error with function getSearchPeople ${error.message}`);
      throw error;
    }
  };

 
