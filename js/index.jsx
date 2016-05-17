var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var store = require('./store');
var AppComponent = require('./app');

var connect = require('react-redux').connect;



document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        <Provider store={store}>
            <AppComponent />
        </Provider>,
        document.getElementById('app')
    );
});
