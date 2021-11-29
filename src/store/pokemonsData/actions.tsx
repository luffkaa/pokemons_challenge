import { 
  GET_POKEMONS_DATA_START,
  GET_POKEMONS_DATA_SUCCESS,
  GET_POKEMONS_DATA_FAILURE,
 } from './types'

export const getPokemonsDataRequest = () => ({
  type: GET_POKEMONS_DATA_START,
})

export const getPokemonsDataSuccess = (data: any) => ({
  type: GET_POKEMONS_DATA_SUCCESS,
  payload: data,
})

export const getPokemonsDataFailure = (err: Error) => ({
  type: GET_POKEMONS_DATA_FAILURE,
  payload: err,
})
