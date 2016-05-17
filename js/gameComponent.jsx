var React = require('react');
var connect = require('react-redux').connect;
var app = require('./app');
var FormComponent = require('./formComponent');
var ListComponent = require('./listComponent');

var GameComponent = React.createClass({
    render: function(){
        return (
            <section className="game">

                <h2 id="feedback">Make your Guess!</h2>

                <FormComponent />

                <p>Guess #<span id="count">0</span>!</p>

                <ListComponent/>

            </section>
        );
    }
});

var Container = connect()(GameComponent);
console.log(connect());

module.exports = Container;
