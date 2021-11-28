
import { Dispatch } from 'redux'
import {
  getPokemonsFailure,
  getPokemonsRequest,
  getPokemonsSuccess
} from './actions'

export const API_URL_PUBLIC = (
  offset: number, 
  limit: number
) => `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`


export const getAllPokemons = (
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
