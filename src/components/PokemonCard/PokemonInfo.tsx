export default function PokemonInfo({
  species,
  stats,
  types,
  weight,
  moves,
}: any) {
  return (
    <ul className="pokemon_info__container">
      <li>Species: {species.name}</li>
      <li>Stats: 
        <ul>
          {stats.map((stat: any, index: number) => 
            <li key={`${stat.stat.name}_${index}`}>{stat.stat.name} {stat.base_stat}</li>
          )}
        </ul>
      </li>
      <li>Types: 
        <ul>
          {types.map((type: any, index: number) => 
            <li key={`${type.type.name}_${index}`}>{type.type.name}</li>
          )}
        </ul>
      </li>
      <li>Weight: {weight} </li>
      <li>Moves: {moves.map((move: any, index: number) =>
        <span key={`${move.move.name}_${index}`}>{move.move.name} </span>
      )}</li>
    </ul>
  )

}
