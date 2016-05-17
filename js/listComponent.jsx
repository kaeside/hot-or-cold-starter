var React = require('react');
var app = require('./app');



// TODO: get guesses from props!
var ListComponent = React.createClass({
    render: function() {
        var listItems = this.props.guesses;
        // var storeListItems = listItems.forEach(item, function(){
        //     return (<li>{item}</li>);
        // });

        return (
            <ul id="guessList" className="guessBox clearfix">
                {listItems.map(function(item){
                    return <li>{item}</li>;
                })}
            </ul>
        );
    }
});

module.exports = ListComponent;
