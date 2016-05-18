var actions = require('./actions');
var update = require('react-addons-update');

var guessReducer = function(state, action) {
    state = state;
    var newState, feedback;
    if (action.type === actions.MAKE_GUESS) {
        if (isNaN(action.guess) || action.guess === '') {
            newState = update(state, {
                [state.length - 1]: {
                    feedback: {
                        $set: 'Enter a number'
                    }
                }
            });
            return newState;
        } else if (action.guess > 100 || action.guess < 0) {
            newState = update(state, {
                [state.length - 1]: {
                    feedback: {
                        $set: 'Make it between 1-100'
                    }
                }
            });
            return newState;
        } else if ((action.guess % 1) != 0) {
            newState = update(state, {
                [state.length - 1]: {
                    feedback: {
                        $set: 'Enter a whole number'
                    }
                }
            });
            return newState;
        } else if (action.guess === state[state.length - 1].randomNumber) {
            newState = update(state, {
                [state.length - 1]: {
                    feedback: {
                        $set: 'YOU WIN, BREH'
                    }
                }
            });
            return newState;
        } else {
            getFeedback = function(state, action){
                
            };
            if (Math.abs(state[state.length-1].secretNumber - action.guess) < 10) {
                feedback = 'hot!';
            }
            newState = update(state, {
                [state.length - 1]: {
                    guesses: {
                        $push: [action.guess]
                    },
                    feedback: {
                        $set: feedback
                    }
                }
            });
            return newState;
        }
    } else if (action.type === actions.NEW_GAME) {
        var secretNumber = Math.floor((Math.random() * 100) + 1);
        return state.concat({
            randomNumber: secretNumber,
            guesses: [],
            feedback: 'Make Your Guess'
        });
    }
    return state;
};

exports.guessReducer = guessReducer;
