import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
//async
export const fetchCharacters = () => {
  return dispatch => {
    dispatch({ type: FETCH_START });
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then(res => { dispatch({ type: FETCH_SUCCESS, payload: res.data.results })})
      .catch(err => console.log(err));
  };
};