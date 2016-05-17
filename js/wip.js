var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.makeGuess(9));

console.log(store.getState());
