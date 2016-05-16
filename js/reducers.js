var actions = require('./actions');

var store = require('./store');
store.dispatch(actions.makeGuess('24'));
store.getState();

var initialRepositoryState = [];

var guessReducer = function(state, action) {
    state = state || initialRepositoryState;
    if (action.type === actions.MAKE_GUESS) {
        return state.concat({
            guessedAnswer: actions.guess
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
