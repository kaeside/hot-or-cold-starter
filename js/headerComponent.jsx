var React = require('react');
var connect = require('react-redux').connect;
var GameComponent = require('./gameComponent');
var actions = require('./actions');

var HeaderComponent = React.createClass({
    onClick: function(){
        this.props.dispatch(actions.newGame());
    },
    wahtClick: function() {
        document.querySelector('.overlay').style.display = 'inline';
        console.log('clicky!');
    },
    goteem: function() {
        document.querySelector('.overlay').style.display = 'none';
    },
    clickYeh: function(){
        this.props.dispatch(actions.fetchTheScore('/scores'));
    },
    render: function () {

        return (
            <header>

                <nav>
                    <ul className="clearfix">
                        <li onClick={this.wahtClick}><a className="what" href="#">What ?</a></li>
                        <li onClick={this.onClick}><a className="new" href="#">+ New Game</a></li>
                        <li onClick ={this.clickYeh}><a className="yeh" href="#">Breh</a></li>
                    </ul>
                </nav>
                <div className="overlay" id="modal">
                    <div className="content">
                        <h3>What do I do?</h3>
                        <div>
                            <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                            <ul>
                                <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it
                                    hidden.
                                </li>
                                <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.
                                </li>
                                <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your
                                    guess is.
                                </li>
                            </ul>
                            <p>So, Are you ready?</p>
                            <a className="close" href="#" onClick={this.goteem}>Got It!</a>
                        </div>
                    </div>
                </div>
                <h1>HOT or COLD</h1>
            </header>
        )

    }
});

var mapStateToProps = function(state, props) {
    var latest = state.length - 1;
    return {
        randomNumber: state[latest].randomNumber,
        guesses: state[latest].guesses
    }
}

var Container = connect(mapStateToProps)(HeaderComponent);
module.exports = Container;
