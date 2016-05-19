var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var NEW_GAME = 'NEW_GAME';
var newGame = function(){
    return {
        type: NEW_GAME
    };
};

var USER_SCORES_YEH = 'USER_SCORES_YEH';
var userScoresYeh = function(scores){
    return {
        type: USER_SCORES_YEH,
        scores: scores
    };
};

var USER_SCORES_MEH = 'USER_SCORES_MEH';
var userScoresMeh = function(mehrror){
    return {
        type: USER_SCORES_MEH,
        error: mehrror
    };
};

var fetchTheScore = function() {
    return function(dispatch) {
        console.log('I am the dispatch', dispatch);
        var url ='http://localhost:8081/scores';
        return fetch(url).then(function(response) {
            console.log('I am the ghost', response);
                if (response.status < 200 || response.status >= 300) {
                    var error = new Error(response.statusText);
                    error.response = response;
                    throw error;
                }
                console.log(response);
                return response;
            })
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log('i am the error');

                return dispatch(
                    userScoresYeh(data)
                );
            })
            .catch(function(error) {
                console.log('no im the error');
                return dispatch(
                    userScoresMeh(error)
                );
            });
    }
};


exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;

exports.USER_SCORES_YEH = USER_SCORES_YEH;
exports.userScoresYeh = userScoresYeh;
exports.USER_SCORES_MEH = USER_SCORES_MEH;
exports.userScoresMeh = userScoresMeh;

exports.fetchTheScore = fetchTheScore;
