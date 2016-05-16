var actions = require('./actions');
var update = require('react-addons-update');

//var store = require('./store');
// store.dispatch(actions.makeGuess('24'));
// store.getState();

var initialGameState = [];

// var newGame = function(state, action) {
//
// //    return state;
// };

var guessReducer = function(state, action) {
    state = state || initialGameState;
    if (action.type === actions.MAKE_GUESS) {
        if (isNaN(action.guess) || action.guess === '') {
            console.log('Enter an actual number, fool.');
        } else if (action.guess > 100 || action.guess < 0) {
            console.log("don't play with me, man");
        } else if ((action.guess % 1) != 0) {
            console.log('get whole, breh');
        } else {
            var newState = update(state, {
                [state.length - 1]: {guesses: {$push: [action.guess]}}
            });
            return newState;
            // return state.concat({
            //     guessedAnswer: action.guess
            // });

        }
} else if (action.type === actions.NEW_GAME) {
    console.log('Hello World');
    var secretNumber = Math.floor((Math.random() * 100) + 1);
    return state.concat({
        randomNumber: secretNumber,
        guesses: []
    });
}

    //var newGameReducer = function(action) {
    //
    //};
    /*
    else if (action.type === actions.RATE_REPOSITORY) {
        // Find the index of the matching repository
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var repository = state[i];
            if (repository.name === action.repository) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newRepository = Object.assign({}, repository, {rating: action.rating});
        return before.concat(newRepository, after);
    }
    */
    return state;
};

exports.guessReducer = guessReducer;
