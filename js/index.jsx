var React = require('react');
var ReactDOM = require('react-dom');

var RepositoryList = require('./repository-list');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<RepositoryList />, document.getElementById('app'));
});
