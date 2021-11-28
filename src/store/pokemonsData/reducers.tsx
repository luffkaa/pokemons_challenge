import { 
  GET_POKEMONS_DATA_START,
  GET_POKEMONS_DATA_SUCCESS,
  GET_POKEMONS_DATA_FAILURE,
 } from './types'

const initialState = {
  pokemonsData: [],
  error: null,
  pending: false,
}

export function pokemonsDataReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_POKEMONS_DATA_START:
      return {
        ...state,
        pending: true,
      }
    case GET_POKEMONS_DATA_SUCCESS:
      return {
        ...state,
        pokemonsData: [
          ...state.pokemonsData,
          action.payload
        ],
        pending: false,
      }
    case GET_POKEMONS_DATA_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    default:
      return state
  }
}
