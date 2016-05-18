var React = require('react');
var connect = require('react-redux').connect

var FormComponent = require('./formComponent');
var ListComponent = require('./listComponent');

var GameComponent = React.createClass({
    render: function(){
        var feedbackText = this.props.feedback;
        var guessCount = this.props.guesses.length + 1;
        return (
            <section className="game">

                <h2 id="feedback">{feedbackText}</h2>

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
    return {
        guesses: state[latest].guesses,
        feedback: state[latest].feedback
    }
};

var Connect = connect(mapStateToProps)(GameComponent);
module.exports = Connect;
