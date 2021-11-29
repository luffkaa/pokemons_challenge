export const selectExactPokemon = (state: any, name: string) => {
  return state.pokemonsDataReducer.pokemonsData.find((pokemon: any) => pokemon.name === name)
}
