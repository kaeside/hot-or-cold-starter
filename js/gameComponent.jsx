var GameComponent = React.CreateClass({

    render: function(){
        return (
            <section class="game"> <!-- Guessing Section -->

                <h2 id="feedback">Make your Guess!</h2>

                < FormComponent />

                <p>Guess #<span id="count">0</span>!</p>

                < ListComponent />

            </section>
        );
    }
});

