var React = require('react');
var ReactDOM = require('react-dom');

var AppComponent = require('./app');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <AppComponent />,
        document.getElementById('app')
    );
});