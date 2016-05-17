var React = require('react');

var StarRater = require('./star-rater');

var Repository = React.createClass({
    changeRating: function(rating) {
        // TODO: Change the rating
    },
    render: function() {
        return (
            <div className="repository">
                {this.props.repository.name}
                &nbsp;
                <StarRater rating={this.props.repository.rating}
                           onChange={this.changeRating} />
            </div>
        );
    }
});

module.exports = Repository;
