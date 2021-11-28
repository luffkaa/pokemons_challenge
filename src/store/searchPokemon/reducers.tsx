import { AnyAction } from 'redux'
import { 
  GET_SEARCH_POKEMON_START,
  GET_SEARCH_POKEMON_SUCCESS,
  GET_SEARCH_POKEMON_FAILURE,
  DELETE_SEARCH_POKEMON_RESULT,
} from './types'

const initialState = {
  searchPokemonResult: [],
  error: null,
  pending: false,
}

export function searchPokemonReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case GET_SEARCH_POKEMON_START:
      return {
        ...state,
        pending: true,
      };
    case GET_SEARCH_POKEMON_SUCCESS:
      return {
        ...state,
        searchPokemonResult: action.payload,
        pending: false,
        error: null,
      };
    case GET_SEARCH_POKEMON_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    case DELETE_SEARCH_POKEMON_RESULT:
      return {
        ...state,
        searchPokemonResult: [],
        pending: false,
        error: null,
      }
    default:
      return state
  };
}
