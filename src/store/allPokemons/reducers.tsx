import { AnyAction } from 'redux'
import { 
  GET_ALL_POKEMONS_START,
  GET_ALL_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS_FAILURE,
} from './types'

const initialState = {
  allPokemons: [],
  error: null,
  pending: false,
}

export function allPokemonsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_ALL_POKEMONS_START:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_POKEMONS_SUCCESS:
      return {
        ...state,
        ...state.allPokemons,
        allPokemons: action.payload,
        pending: false,
      };
    case GET_ALL_POKEMONS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state
  };
}
