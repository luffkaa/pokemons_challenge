import { IPokemonCard } from "./types";
import './styles.css'
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsData, selectExactPokemon } from "../../store";
import { useEffect, useState } from "react";
import PokemonInfo from "./PokemonInfo";

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
        <PokemonInfo {...pokemon}/>
      }
    </div>
  )
}
