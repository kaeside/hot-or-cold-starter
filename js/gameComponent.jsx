var React = require('react');
var connect = require('react-redux').connect

var FormComponent = require('./formComponent');
var ListComponent = require('./listComponent');

var GameComponent = React.createClass({
    render: function(){
        var guessCount = this.props.guesses.length + 1;
        return (
            <section className="game">

                <h2 id="feedback">Make your Guess!</h2>

                <FormComponent />

                <p>Guess #<span id="count">{guessCount}</span>!</p>

                <ListComponent />

            </section>
        );
    }
});


// Necessary to re-map state at lower levels?
var mapStateToProps = function(state, props) {
    var latest = state.length - 1;
    console.log("State within mapStateToProps of GameComponent.jsx", state);
    return {
        randomNumber: state[latest].randomNumber,
        guesses: state[latest].guesses
    }
}

var Connect = connect(mapStateToProps)(GameComponent);
module.exports = Connect;
