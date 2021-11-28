import { IPokemonCard } from "./types";

export default function PokemonCard({
  name,
  url,
}: IPokemonCard) {
  return (
    <div>{name}</div>
  )
}
