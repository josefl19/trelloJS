require('dotenv').config();

if(!process.env.TOKEN && !process.env.KEY) {
    throw new Error('No hay configuración con API key y token');
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`

trello.addCard(cardTitle, "LaunchX Card Description", "628c5a8250ae7383135c67fb",	// Id List
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	}
);