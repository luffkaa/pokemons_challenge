import { debounce } from 'lodash'
import {
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllPokemons, getSearchPokemon } from '../../store'
import { IPokemonCard } from '../PokemonCard/types'

export const useSearchPokemonByName = () => {
  const dispatch = useDispatch()
  const allPokemons = useSelector(selectAllPokemons);
  const [query, setQuery] = useState("")
  const ref = useRef("")
  const searchPokemonsDebounce = useMemo(
    () =>
      debounce(async (query) => {
        if (query.length >=3) {
          const match = allPokemons.filter((pokemon: IPokemonCard) => pokemon.name.includes(query))
          dispatch(getSearchPokemon(match))
        }
      }, 400),
    [allPokemons, dispatch],
  )
  
  useEffect(() => {
    if (query) {
      searchPokemonsDebounce(query)
    }
    ref.current = query
  }, [query, searchPokemonsDebounce])

  return { setQuery, query }
}
