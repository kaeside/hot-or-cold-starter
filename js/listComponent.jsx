var React = require('react');
var connect = require('react-redux').connect;

var ListComponent = React.createClass({
    render: function() {
        console.log(this.props);
        var listItems = this.props.guesses;

        return (
            <ul id="guessList" className="guessBox clearfix">
                {listItems.map(function(item){
                    return <li>{item}</li>;
                })}
            </ul>
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

var Connect = connect(mapStateToProps)(ListComponent);

module.exports = Connect;
