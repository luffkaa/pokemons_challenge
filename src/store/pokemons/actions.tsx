import { IPokemonCard } from '../../components/PokemonCard/types'
import { 
  GET_POKEMONS_START,
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAILURE,
} from './types'

export const getPokemonsRequest = () => ({
  type: GET_POKEMONS_START,
})

export const getPokemonsSuccess = (data: IPokemonCard) => ({
  type: GET_POKEMONS_SUCCESS,
  payload: data,
})

export const getPokemonsFailure = (err: Error) => ({
  type: GET_POKEMONS_FAILURE,
  payload: err,
})
