var React = require('react');
var actions = require('./actions');
var HeaderComponent = require('./headerComponent');
var GameComponent = require('./gameComponent');
var connect = require('react-redux').connect;

var AppComponent = React.createClass({
    componentWillMount: function() {
        this.props.dispatch(actions.makeGuess(8));

    },
    render: function() {
        return (
            <div>
                <HeaderComponent />
                <GameComponent />
            </ div>

        );
    }
});

var mapStateToProps = function(state, props) {
    return {
        randomNumber: state.randomNumber,
        guesses: state.guesses
    }
}

var Container = connect(mapStateToProps)(AppComponent);

module.exports = Container;
