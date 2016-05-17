var React = require('react');


var ListComponent = React.createClass({
    render: function() {
        var listItems = [8,9,0,1,2,3,4];
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
