var redux = require('redux');
var createStore = redux.createStore;
var reducers = require('./reducers.jsx');

console.log(reducers);

var store = createStore(reducers.repositoryReducer);
module.exports  = store;


/*
Run node in command line. In the REPL, assign these variables
& run the code on the lines with the arrows. The console should print
as shown.

> var actions = require('./js/actions');
> var store = require('./js/store');
> store.dispatch(actions.addRepository('joe'));
    { type: 'ADD_REPOSITORY', repository: 'joe' }
> store.getState();
    [ { name: 'joe', rating: null } ]
*/
