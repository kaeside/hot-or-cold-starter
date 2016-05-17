var React = require('react');
var HeaderComponent = require('./headerComponent');
var GameComponent = require('./gameComponent');


var AppComponent = React.createClass({
    render: function() {
        return (
            < HeaderComponent />
            < GameComponent />
        );
    }
});

exports.AppComponent = AppComponent;