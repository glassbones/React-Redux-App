import { FETCH_START, FETCH_SUCCESS } from '../actions';

export const initialState = { isFetching: false, characters: [], error: '' };
export const reducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_START: return { ...state, isFetching: true};
    case FETCH_SUCCESS: return {...state, isFetching: false, characters: action.payload};
    default: return state;
  }

};
