var actions = require('./actions');
var update = require('react-addons-update');

var guessReducer = function(state, action) {
    state = state;
    console.log('This is the state',state);
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
        } else if (action.guess > 100 || action.guess <= 0) {
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
           if (Math.abs(action.guess - state[state.length -1].randomNumber) < 10){
               feedback = 'Very Hot!';
           } else if (Math.abs(action.guess - state[state.length -1].randomNumber) < 20){
               feedback = 'Pretty Hot!';
           } else if (Math.abs(action.guess - state[state.length -1].randomNumber) < 30){
               feedback = 'Meh!';
           } else if (Math.abs(action.guess - state[state.length -1].randomNumber) < 40){
               feedback = 'Cold!';
           } else if (Math.abs(action.guess - state[state.length -1].randomNumber) >= 40){
               feedback = 'Very Cold!';
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
