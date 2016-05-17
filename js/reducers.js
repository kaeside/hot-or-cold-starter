var actions = require('./actions');
var update = require('react-addons-update');

var initialGameState = [];

var guessReducer = function(state, action) {
    state = state || initialGameState;
    if (action.type === actions.MAKE_GUESS) {
        if (isNaN(action.guess) || action.guess === '') {
            console.log('Enter an actual number, fool.');
        } else if (action.guess > 100 || action.guess < 0) {
            console.log("don't play with me, man");
        } else if ((action.guess % 1) != 0) {
            console.log('get whole, breh');
        } else if (action.guess === state[state.length - 1].randomNumber) {
            console.log('CORRECT BREH, NO CHEATING BREH');
        }

        else {
            var newState = update(state, {
                [state.length - 1]: {guesses: {$push: [action.guess]}}
            });
            return newState;
        }
} else if (action.type === actions.NEW_GAME) {
    var secretNumber = Math.floor((Math.random() * 100) + 1);
    return state.concat({
        randomNumber: secretNumber,
        guesses: []
    });
}
    return state;
};

exports.guessReducer = guessReducer;
