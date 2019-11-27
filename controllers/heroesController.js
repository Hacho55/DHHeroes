// Require de FS
const fs = require('fs');


// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync(__dirname + '/../data/heroes.json', 'utf-8'));





const heroesController = {
heroes: (req, res) => {
	res.send(heroes);
},
detalle: (req, res) => {
	
	let heroe = heroes.find(heroe => heroe.id == req.params.id);
	let detalleHeroe = heroe != undefined ? "Mi nombre es: " + heroe.nombre +  " y soy: " + heroe.profesion : 'No se encontro';
	res.send(detalleHeroe);
	
},
bio: (req, res) => {
	let heroe = heroes.find(heroe => heroe.id == req.params.id);

	let bioHeroe = null;

	if (heroe == undefined) {
		bioHeroe = 'No encontramos un heroe';
		
	} else {
		if (req.params.ok && req.params.ok == "ok") {
			bioHeroe = 'Soy ' + heroe.nombre + ' ' + heroe.resenia;
			
		} else {
			bioHeroe = 'Soy ' + heroe.nombre + ' Lamento que no desees saber mas de mi';

		}
	}

	res.send(bioHeroe);
},





};

module.exports = heroesController;