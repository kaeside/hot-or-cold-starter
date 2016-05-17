var React = require('react');

var Repository = require('./repository');

var RepositoryList = React.createClass({
    addRepository: function() {
        var repositoryName = this.refs.repositoryName.value;
        // TODO: Add the repository to the state
    },

    render: function() {
        var repositories = this.props.repositories.map(function(repository) {
            return <Repository repository={repository} key={repository.name} />;
        });

        return (
            <div className="repository-list">
                {repositories}
                <input type="text" ref="repositoryName" />
                <button type="button" onClick={this.addRepository}>
                    Add repository
                </button>
            </div>
        );
    }
});

module.exports = RepositoryList;
