var React = require('react');
var connect = require('react-redux').connect

var FormComponent = require('./formComponent');
var ListComponent = require('./listComponent');

var GameComponent = React.createClass({
    render: function(){
        return (
            <section className="game">

                <h2 id="feedback">Make your Guess!</h2>

                <FormComponent />

                <p>Guess #<span id="count">0</span>!</p>

                <ListComponent />

            </section>
        );
    }
});


// Necessary to re-map state at lower levels?
var mapStateToProps = function(state, props) {
    console.log("State within mapStateToProps of GameComponent.jsx", state);
    return {
        randomNumber: state.randomNumber,
        guesses: state.guesses
    }
}

var Connect = connect(mapStateToProps)(GameComponent);
module.exports = Connect;
