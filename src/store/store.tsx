import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { pokemonsReducer } from './pokemons'
import { pokemonsDataReducer } from './pokemonsData'
import { searchPokemonReducer } from './searchPokemon'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

const persistReducers = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: [
      'searchPokemonReducer'
    ],
  },
  combineReducers({
    pokemonsReducer,
    pokemonsDataReducer,
  }),
)

export const store = createStore(
  persistReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {},
  ),
);

export const persistor = persistStore(store)
