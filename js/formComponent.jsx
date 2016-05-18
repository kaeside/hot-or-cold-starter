var React = require('react');
var FormComponent = React.createClass({
    preventRefresh: function(e) {
        e.preventDefault;
    },
    render: function() {
        return(
            <form onSubmit={this.preventRefresh}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off"
                       placeholder="Enter your Guess" required/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

module.exports = FormComponent;
