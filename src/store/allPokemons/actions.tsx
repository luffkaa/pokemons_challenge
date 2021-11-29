import { IPokemonCard } from '../../components/PokemonCard/types'
import { 
  GET_ALL_POKEMONS_START,
  GET_ALL_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS_FAILURE,
} from './types'

export const getAllPokemonsRequest = () => ({
  type: GET_ALL_POKEMONS_START,
})

export const getAllPokemonsSuccess = (data: IPokemonCard[]) => ({
  type: GET_ALL_POKEMONS_SUCCESS,
  payload: data,
})

export const getAllPokemonsFailure = (err: Error) => ({
  type: GET_ALL_POKEMONS_FAILURE,
  payload: err,
})
