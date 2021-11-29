import { 
  GET_SEARCH_POKEMON_START,
  GET_SEARCH_POKEMON_SUCCESS,
  GET_SEARCH_POKEMON_FAILURE,
  DELETE_SEARCH_POKEMON_RESULT,
} from './types'

export const getSearchPokemonRequest = () => ({
  type: GET_SEARCH_POKEMON_START,
})

export const getSearchPokemonSuccess = (data: any) => ({
  type: GET_SEARCH_POKEMON_SUCCESS,
  payload: data,
})

export const getSearchPokemonFailure = (err: Error) => ({
  type: GET_SEARCH_POKEMON_FAILURE,
  payload: err,
})

export const getDeletePokemonSearchResult = () => ({
  type: DELETE_SEARCH_POKEMON_RESULT
}) 
