import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import {
  selectSearchPokemonResult,
  selectSearchPokemonError,
  selectSearchPokemonPending,
  getDeletePokemonSearchResult,
} from '../../store'
import PokemonCard from '../PokemonCard'
import { useSearchPokemonByName } from './useSearchPokemon'

export default function SearchPokemon() {
  const { setQuery, query } = useSearchPokemonByName()

  const dispatch = useDispatch()

  const searchPokemonsResult = useSelector(selectSearchPokemonResult)
  const pending = useSelector(selectSearchPokemonPending)
  const error = useSelector(selectSearchPokemonError)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    if (e.target.value === '') {
      dispatch(getDeletePokemonSearchResult())
    }
  }

  return (
    <div className="pokemons__search">
      <input
        className="pokemons__search_input"
        type="text"
        name="search_pokemon"
        id="search_pokemon"
        value={query}
        onChange={(e) => onChange(e)}
        placeholder="Type Pokemon name here..."
      />
      <div className="pokemons__search_result">
        { error ?
            <h2>No such Pokemon found, please try again</h2>
          : !pending && searchPokemonsResult?.length === 0 ?
              <h2>Search results will be here</h2>
          : !pending && !!searchPokemonsResult &&
              searchPokemonsResult.map((pokemon: any, index: number) =>
                <PokemonCard key={`search_result_${index}`} {...pokemon}/>
              )
        }
      </div>
    </div>
  )
}
