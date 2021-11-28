export const selectPokemons = (state: any) => state.pokemonsReducer.pokemons;
export const selectPokemonsError = (state: any) => state.pokemonsReducer.error;
export const selectPokemonsPending = (state: any) => state.pokemonsReducer.pending;
