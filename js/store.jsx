var redux = require('redux');
var createStore = redux.createStore;
var reducers = require('./reducers.jsx');

console.log(reducers);

var store = createStore(reducers.repositoryReducer);
module.exports  = store;
