var ADD_CARD = 'ADD_CARD';

var addCard = function(content) {
    return {
        type: ADD_CARD,
        content: content
    };
};

var action = addCard('The content of card');
