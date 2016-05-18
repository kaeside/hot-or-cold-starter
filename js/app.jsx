var React = require('react');
var connect = require('react-redux').connect;

var actions = require('./actions');
var HeaderComponent = require('./headerComponent');
var GameComponent = require('./gameComponent');

var AppComponent = React.createClass({
    componentWillMount: function() {
        //this.props.dispatch(actions.makeGuess(8));

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

var Container = connect()(AppComponent);

module.exports = Container;
