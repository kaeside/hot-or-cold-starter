var React = require('react');


var ListComponent = React.createClass({
    render: function() {

        var listItems = [8, 6, 7, 5, 3, 0, 9];

        return (
            <ul id="guessList" className="guessBox clearfix">{listItems}</ul>
        );
    }
});

exports.ListComponent = ListComponent;


