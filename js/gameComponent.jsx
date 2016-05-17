var React = require('react');
var FormComponent = require('./formComponent');
var ListComponent = require('./listComponent');

var GameComponent = React.createClass({
    render: function(){
        return (
            <section className="game">

                <h2 id="feedback">Make your Guess!</h2>

                < FormComponent />

                <p>Guess #<span id="count">0</span>!</p>

                < ListComponent />

            </section>
        );
    }
});

module.exports = GameComponent;

