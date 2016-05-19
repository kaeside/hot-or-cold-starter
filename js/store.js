var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers');

var initialTestState = [{
    randomNumber: 10,    //Math.floor((Math.random() * 100) + 1),
    guesses: [8,6,7,5,3,1,9],
    feedback: 'Make Your Guess'
}];


var store = createStore(reducers.guessReducer,initialTestState, applyMiddleware(thunk));
module.exports = store;
