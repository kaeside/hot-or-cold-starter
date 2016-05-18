var React = require('react');
preventRefresh: function(e) {
    e.preventDefault;
}
var FormComponent = React.createClass({
    render: function() {
        return(
            <form onsubmit={this.preventRefresh}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off"
                       placeholder="Enter your Guess" required/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

module.exports = FormComponent;
