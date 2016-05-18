var React = require('react');
var actions = require('./actions');
var connect = require('react-redux').connect;
var GameComponent = require('./gameComponent');

var FormComponent = React.createClass({
    preventRefresh: function(e) {
        e.preventDefault();
        var userGuess = parseInt(this.refs.guessField.value);
        this.props.dispatch(actions.makeGuess(userGuess));
        this.refs.guessField.value = '';
    },
    render: function() {
        return(
            <form onSubmit={this.preventRefresh}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off"
                       placeholder="Enter your Guess" ref="guessField" required/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

var mapStateToProps = function(state, props) {
    var latest = state.length - 1;
    return {
        randomNumber: state[latest].randomNumber,
        guesses: state[latest].guesses
    }
};

var Connect = connect(mapStateToProps)(FormComponent);
module.exports = Connect;
