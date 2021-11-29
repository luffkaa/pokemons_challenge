import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { allPokemonsReducer } from './allPokemons/reducers';
import { pokemonsReducer } from './pokemons'
import { pokemonsDataReducer } from './pokemonsData'
import { searchPokemonReducer } from './searchPokemon'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistReducers = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: [
      'searchPokemonReducer'
    ],
  },
  combineReducers({
    allPokemonsReducer,
    pokemonsReducer,
    pokemonsDataReducer,
    searchPokemonReducer,
  }),
)

export const store = createStore(
  persistReducers,
  compose(
    applyMiddleware(thunk),
    composeEnhancers()
  ),
);

export const persistor = persistStore(store)
