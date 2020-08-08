(() => {
	console.log('fire!');

	const		musicGenre = document.querySelectorAll('#buttonHolder img'),
	      	theAnimals = document.querySelectorAll('.drop'),
	      	scenario = document.querySelector('.sound-board'),
					farm = document.querySelector('.sound-pieces');

	let     animalNames = ["left", "midLeft", "midRight", "right"],
	    		theSounds = document.querySelectorAll('.sound'),
	    		audio =  document.querySelector("audio"),
					theGenres = document.querySelectorAll(".concert");


//FUNCTIONS:

function changeMusicGenre(event) {

		console.log('Let´s play');
		scenario.style.backgroundImage = `url(images/genre${this.dataset.bgkey}.jpg)`;

		theAnimals.forEach((animal) => {

			 	while (animal.firstChild) {

					let thisChild = animal.removeChild(animal.firstChild);
					farm.appendChild(thisChild);

			 }

	 	})

}


function drag(event) {

		console.log('dragging me');

		event.dataTransfer.setData(let = "soundTaken", this.id);

		/*var este = document.querySelectorAll('audio');

		 for(i=0; i<este.length; i++) este[i].pause();*/


}


function dragover (event) {

		console.log('dragged something over me!');

		event.preventDefault(); //<--This makes the browser allows me to make what I want

}


function drop(event) {

		console.log('dropped me');

		let soundOn = event.dataTransfer.getData("soundTaken"),
				currentTrack = document.querySelector(`#${soundOn}`).dataset.track;

		if (event.currentTarget.children.length === 0) {

			event.target.appendChild(document.querySelector(`#${soundOn}`));

			if (document.querySelector(`audio[src="assets/${currentTrack}"]`)){

				return;
			}


		let currentSound = document.createElement('audio');
				currentSound.src = `assets/${currentTrack}`;

	   			currentSound.load();

					currentSound.loop = "true";

		      document.body.appendChild(currentSound);

					currentSound.play();
		}

		else {

			console.log('this spot is busy.');

		}
}


function shutup() {

     	var sounds = document.getElementsByTagName('audio');

    	for(i=0; i<sounds.length; i++) sounds[i].pause();
}


function startconcert () { //PLAY THE AUDIOS THAT MATCH THE SCENARIOS(MUSICAL GENRE)

		console.log('DO IT');

		let musicalscenario = `assets/${this.dataset.track}`; //THIS IS DINAMIC, QHICH MEANS IT CAN CHANGE /the 'this' keyword refers to the image or element you've clicked on



		audio.src = musicalscenario;

		audio.load();//Load method loads whatever resource(src) you indicate

		audio.play();
}


	//MAKING THE FUNCTIONS RUN (Invocations)
	musicGenre.forEach(button => button.addEventListener('click', changeMusicGenre));
	musicGenre.forEach(button => button.addEventListener('click', shutup));
	musicGenre.forEach(button => button.addEventListener('click', startconcert));
	theSounds.forEach(piece => piece.addEventListener('dragstart', drag));
	theSounds.forEach(piece => piece.addEventListener('dragover', dragover));


    //ADDING VARIABLES TO THE ARRAY OF A CURRENT VARIABLE
	for (let doit of theAnimals) {
		doit.addEventListener('dragover', dragover);
		doit.addEventListener('drop', drop);
	}

	changeMusicGenre.call(musicGenre[0]);
})();
