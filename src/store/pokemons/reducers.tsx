import { AnyAction } from 'redux'
import { 
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from './types'

const initialState = {
  pokemons: [],
  error: null,
  pending: false,
}

export function pokemonsReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case GET_POKEMONS_START:
      return {
        ...state,
        pending: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemons: action.payload,
        pending: false,
      };
    case GET_POKEMONS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state
  };
}
