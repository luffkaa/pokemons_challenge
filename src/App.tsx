import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllPokemons,
  getPokemons,
  selectPokemons,
  selectPokemonsPending
} from './store';
import {
  NavigationButtonsContainer,
  PokemonCard,
  SearchPokemon
} from './components';

function App() {
  const [pokemonsOffset, setPokemonsOffset] = useState(0);
  const [pokemonsLimit, setPokemonsLimit] = useState(16)
  const allPokemons = useSelector(selectPokemons)
  const pending = useSelector(selectPokemonsPending);
  const dispatch = useDispatch();

  const handleLoadNext = () => {
    const newOffset = pokemonsOffset + pokemonsLimit
    if (newOffset > allPokemons.count) {
      setPokemonsOffset(allPokemons.count - pokemonsLimit)
      dispatch(getPokemons(allPokemons.count - pokemonsLimit, pokemonsLimit))
    } else {
      setPokemonsOffset(newOffset)
      dispatch(getPokemons(newOffset, pokemonsLimit))
    }
  }

  const handleLoadPrev = () => {
    const newOffset = pokemonsOffset - pokemonsLimit
    if (newOffset < 0) {
      setPokemonsOffset(0)
      dispatch(getPokemons(0, pokemonsLimit))
    } else {
      setPokemonsOffset(newOffset)
      dispatch(getPokemons(newOffset, pokemonsLimit))
    }
  }
  
  useEffect(() => {
    dispatch(getPokemons(pokemonsOffset, pokemonsLimit))
  }, [dispatch, pokemonsLimit, pokemonsOffset])

  useEffect(() => {
    dispatch(getAllPokemons())
  },[dispatch])

  return (
    <div className="App">
      <SearchPokemon />
      <div className="pokemons__container">
        { pending ? 'Data loading...' : 
          allPokemons?.results?.map((pokemon: any, index: number) => 
            <PokemonCard key={index} {...pokemon}/>
          )
        }
      </div>
      <NavigationButtonsContainer
        handleLoadPrev={handleLoadPrev}
        handleLoadNext={handleLoadNext}
      />
    </div>
  );
}

export default App;
