var actions = require('./actions');
var store = require('./store');

store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(96));
store.dispatch(actions.makeGuess(4832));
store.dispatch(actions.makeGuess(0.987));
store.dispatch(actions.makeGuess(86));

store.dispatch(actions.newGame());
store.dispatch(actions.makeGuess(87));

console.log(store.getState());
