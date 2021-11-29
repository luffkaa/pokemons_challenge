# Pokemons API Challenge

#### To complete this task I used:
* `create-react-app` with `typescript`;
* `redux` to store data;
* `redux-thunk` to handle async requests;
* `redux-persist` to persist search results;
* `lodash` to delay searching process;

#### How I tackled the solution:
1. I create store, actions and reducers for displaying Pokemons and navigate between pages.
2. Then I create actions and reducers to fetch and display data for each Pokemon.
3. Then there was 2 attempts to implement searching. 
* First was not a good idea - use search string value to fetch Pokemon directli from API but it only worked for a full Pokemon name and not parts of it.
* Then I've decided to store all Pokemons names and use search string value to search all Pokemons names that includes this substring. And then put all of this values ito store and then display all of them in App whitch worked good.

#### What can be changed:
* Not all of the types was propperly described because it could took too much time. Of course this is the thing to improve;
* Also can be added selecting number of Pokemons to display (instead of hardcoded 16);
* More functionality for navigation (eg. total number of pages);
* Single page for each pokemon with their data;
* In this variant no special styles used. So this thing can be changed too;

#### To run project at localhost
`yarn start`
