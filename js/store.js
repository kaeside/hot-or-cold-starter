var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');


var initialTestState = [{
    randomNumber: Math.floor((Math.random() * 100) + 1),
    guesses: [8,6,7,5,3,1,9]
}];


var store = createStore(reducers.guessReducer, initialTestState);
module.exports = store;
