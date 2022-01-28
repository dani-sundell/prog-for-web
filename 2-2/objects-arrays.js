const myFavGames = [
    {title: 'Wingspan', type: 'board game', numberOfPlayers: 5, rating: '5 stars', shortDescription: 'players build an aviary with different types of birds'},
    {title: 'Settlers of Catan', type: 'board game', numberOfPlayers: 4, rating: '5 stars', shortDescription: 'players compete for resouces to build the best community'},
    {title: 'Ticket to Ride', type: 'board game', numberOfPlayers: 6, rating: '4 stars', shortDescription: 'players use trains to build routes across the U.S'}
];

const yourInquiry = window.prompt('I have 3 games in my collection. Pick a number between 1 and 3 and I will tell you about it.');
window.alert('You selected ' + myFavGames[yourInquiry - 1].title + ' which is a ' + myFavGames[yourInquiry - 1].type + ' where ' + myFavGames[yourInquiry - 1].shortDescription + '.' + ' Up to ' + myFavGames[yourInquiry - 1].numberOfPlayers + ' people can play at once. I would rate it ' + myFavGames[yourInquiry - 1].rating + '.');
