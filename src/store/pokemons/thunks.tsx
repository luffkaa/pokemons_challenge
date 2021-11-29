
import { Dispatch } from 'redux'
import { IPokemonCard } from '../../components/PokemonCard/types'
import { getAllPokemonsFailure, getAllPokemonsRequest, getAllPokemonsSuccess } from '../allPokemons'
import {
  getPokemonsDataFailure,
  getPokemonsDataRequest,
  getPokemonsDataSuccess
} from '../pokemonsData'
import {
  getSearchPokemonRequest,
  getSearchPokemonSuccess,
  getSearchPokemonFailure,
} from '../searchPokemon'
import {
  getPokemonsFailure,
  getPokemonsRequest,
  getPokemonsSuccess
} from './actions'

export const API_URL_PUBLIC = (
  offset: number,
  limit: number
) => `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`

export const API_URL_SEARCH_POKEMON = (name: string) => `https://pokeapi.co/api/v2/pokemon/${name}`

export const getPokemons = (
  offset: number,
  limit: number
) => async (dispatch: Dispatch) => {
  dispatch(getPokemonsRequest())

  try {
    const res = await fetch(API_URL_PUBLIC(offset, limit))

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }
    const result = await res.json()

    dispatch(getPokemonsSuccess(result))
  } catch (err: any) {
    dispatch(getPokemonsFailure(err.message))
  }
}

export const getAllPokemons = () => async (dispatch: Dispatch) => {
  dispatch(getAllPokemonsRequest())

  try {
    const res = await fetch(API_URL_PUBLIC(0, 1118))

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }
    const result = await res.json()

    dispatch(getAllPokemonsSuccess(result.results))
  } catch (err: any) {
    dispatch(getAllPokemonsFailure(err.message))
  }
}

export const getPokemonsData = (name: string) => async (dispatch: Dispatch) => {
  dispatch(getPokemonsDataRequest())

  try {
    const res = await fetch(API_URL_SEARCH_POKEMON(name))

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }

    const result = await res.json()

    dispatch(getPokemonsDataSuccess(result))
  } catch (err: any) {
    dispatch(getPokemonsDataFailure(err.message))
  }
}

export const getSearchPokemon = (pokemons: IPokemonCard[]) => async (dispatch: Dispatch) => {
  dispatch(getSearchPokemonRequest()) 
  try {
    if (pokemons.length > 0) {
      dispatch(getSearchPokemonSuccess(pokemons))
    } else {
      throw new Error('No such pokemons found')
    }
  } catch (err: any) {
    dispatch(getSearchPokemonFailure(err.message))
  }
  
}
