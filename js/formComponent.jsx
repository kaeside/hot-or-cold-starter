var React = require('react');

var FormComponent = React.createClass({
    render: function() {
        return(
            <form>
                <input type="text" name="userGuess" id="userGuess" className="text" maxlength="3" autocomplete="off"
                       placeholder="Enter your Guess" required/>
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

module.exports = FormComponent;
