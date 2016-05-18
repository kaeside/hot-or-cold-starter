var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');
var HeaderComponent = require('./headerComponent');
var GameComponent = require('./gameComponent');

var AppComponent = React.createClass({
    componentWillMount: function() {
        this.props.dispatch(actions.makeGuess(8));

    },
    render: function() {
        return (
            <div>
                <HeaderComponent />
                <GameComponent />
            </div>

        );
    }
});

var mapStateToProps = function(state, props) {
    var latest = state.length - 1;
    return {
        randomNumber: state[latest].randomNumber,
        guesses: state[latest].guesses,
        feedback: state[latest].feedback
    }
};

var Container = connect(mapStateToProps)(AppComponent);

module.exports = Container;
