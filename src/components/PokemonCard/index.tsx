import { IPokemonCard } from "./types";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsData, selectExactPokemon } from "../../store";
import { useEffect, useState } from "react";

export default function PokemonCard({
  name,
}: IPokemonCard) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const dispatch = useDispatch()

  const pokemon = useSelector((state) => selectExactPokemon(state, name))

  const handleClick = () => {
    setIsInfoOpen(!isInfoOpen)
  }

  useEffect(() => {
    dispatch(getPokemonsData(name))
  }, [dispatch, name])

  console.log('pokemon',pokemon)
  
  return (
    <div className="pokemon_card__container"
      onClick={handleClick}
    >
      { pokemon ? 
        <img
          className="pokemon__image"
          src={pokemon.sprites.front_default}
          alt={`${name}`}
          srcSet={pokemon.sprites.front_default}
        />
        : 'image loading'
      }
      <h3>{name}</h3>
      { pokemon && isInfoOpen && 
        <ul className="pokemon_info__container">
          <li>Species: {pokemon.species?.name}</li>
          <li>Stats: 
            <ul>
              {pokemon.stats.map((stat: any, index: number) => 
                <li key={`${stat.stat.name}_${index}`}>{stat.stat.name} {stat.base_stat}</li>
              )}
            </ul>
          </li>
          <li>Types: 
            <ul>
              {pokemon.types.map((type: any, index: number) => 
                <li key={`${type.type.name}_${index}`}>{type.type.name}</li>
              )}
            </ul>
          </li>
          <li>Weight: {pokemon.weight} </li>
          <li>Moves: {pokemon.moves.map((move: any, index: number) =>
            <span key={`${move.move.name}_${index}`}>{move.move.name} </span>
          )}</li>
        </ul>
      }
    </div>
  )
}
