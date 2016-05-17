var React = require('react');
var HeaderComponent = require('./headerComponent');
var GameComponent = require('./gameComponent');
var connect = require('react-redux').connect;

var AppComponent = React.createClass({
    render: function() {
        return (
            <div>
                < HeaderComponent />
                < GameComponent />
            </ div>

        );
    }
});

var mapStateToProps = function(state, props) {
    console.log('HELP US OBI WAN');
    return {
        randomNumber: state.randomNumber,
        guesses: state.guesses
    }
}

var Container = connect(mapStateToProps)(AppComponent);

module.exports = Container;
