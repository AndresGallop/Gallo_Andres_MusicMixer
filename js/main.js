(() => {
	console.log('fire!');


	const	musicGenre = document.querySelectorAll('#buttonHolder img'),
	      	theAnimals = document.querySelectorAll('.drop'),
	      	scenario = document.querySelector('.sound-board'),
			farm = document.querySelector('.sound-pieces');

	const musicGenre = document.querySelectorAll('#buttonHolder img'),
	      theAnimals = document.querySelectorAll('.drop'),
	      scenario = document.querySelector('.sound-board'),
				farm = document.querySelector('.sound-pieces');



	let animalNames = ["left", "midLeft", "midRight", "right"],
	    theSounds = document.querySelectorAll('.sound'),
	    audio =  document.querySelector("audio"),

		theGenres = document.querySelectorAll(".concert");

	//FUNCTIONS
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
	}

	function dragover (event) {
		console.log('dragged something over me!');
		event.preventDefault(); //This makes the browser allows me to make what I want
	}

	function drop(event) {
		console.log('dropped me');

		let soundOn = event.dataTransfer.getData("soundTaken"),
			currentTrack = document.querySelector(`#${soundOn}`).dataset.track;

			debugger;

		if (event.currentTarget.children.length === 0) {
			event.target.appendChild(document.querySelector(`#${soundOn}`));

			let currentSound = document.createElement('audio');
			currentSound.src = `assets/${currentTrack}`;

			currentSound.load();
			currentSound.loop = "true";
			document.body.appendChild(currentSound);

			currentSound.play();
		}

		else {
			console.log('this spot is busy.')
		}
	}

	function playsound () { //PLAY THE AUDIOS THAT MATCH THE ANIMALS
		event.preventDefault();

		console.log('Proving if it works');
		// the 'this' keyword refers to the image you've clicked on
		let currentTrack =  `assets/${this.dataset.track}`;

		audio.src = currentTrack;
		audio.load();
		audio.play();
	}

	function startconcert () { //PLAY THE AUDIOS THAT MATCH THE SCENARIOS(MUSICAL GENRE)
		console.log('DO IT');
		// the 'this' keyword refers to the image or element you've clicked on
		let musicalscenario = `assets/${this.dataset.track}`; //THIS IS DINAMIC, QHICH MEANS IT CAN CHANGE

		audio.src = musicalscenario;
		audio.load();//Load method loads whatever resource(src) you indicate

		// here I am calling the function below to make the audio play
		audio.play();
	}

	//MAKING THE FUNCTIONS RUN
	musicGenre.forEach(button => button.addEventListener('click', changeMusicGenre));
	musicGenre.forEach(button => button.addEventListener('click', startconcert));
	theSounds.forEach(piece => piece.addEventListener('dragstart', drag));
	theSounds.forEach(piece => piece.addEventListener('dragover', dragover));


    //ADDING VARIABLES TO THE ARRAY OF A CURRENT VARIABLE
	for (let doit of theAnimals) {

			theGenres = document.querySelectorAll(".concert");




	//FUNCTIONS

		function changeMusicGenre(event) {

			console.log('Let´s play');



			scenario.style.backgroundImage = `url(images/genre${this.dataset.bgkey}.jpg)`;

			theAnimals.forEach((animal) => {

            while (animal.firstChild)
            {let thisChild = animal.removeChild(animal.firstChild);


                farm.appendChild(thisChild);
            }
        })

			}

		function drag(event) {

			console.log('dragging me');
			event.dataTransfer.setData(let = "soundTaken", this.id);

		}

		function dragover (event) {

			console.log('dragged something over me!');
			event.preventDefault(); //This makes the browser allows me to make what I want
		}



		function drop(event) {

			console.log('dropped me');

			let soundOn = event.dataTransfer.getData("soundTaken");
if (event.currentTarget.children.length === 0) {
				event.target.appendChild(document.querySelector(`#${soundOn}`));
			}

			else {
				console.log('this spot is busy.')

			}

		}



		function playsound () { //PLAY THE AUDIOS THAT MATCH THE ANIMALS
			event.preventDefault();


			console.log('Proving if it works');
	    	// the 'this' keyword refers to the image you've clicked on
	    	let currentTrack =  `assets/${this.dataset.track}`;


	    	audio.src = currentTrack;
	    	audio.load();


           playAudio();
	    }

	    function playAudio() {
	    	// play the audio track

				audio.play();
				new Audio(audio.src).play();

		}



		function startconcert () { //PLAY THE AUDIOS THAT MATCH THE SCENARIOS(MUSICAL GENRE)



			console.log('DO IT');
	    	// the 'this' keyword refers to the image or element you've clicked on
	    	let musicalscenario = `assets/${this.dataset.track}`; //THIS IS DINAMIC, QHICH MEANS IT CAN CHANGE


	    	audio.src = musicalscenario;
	    	audio.load();//Load method loads whatever resource(src) you indicate

	    	// here I am calling the function below to make the audio play
           playconcert();
	    }

	    function playconcert() {
	    	// play the audio track


        audio.play();
				new Audio(audio.src).play();

	      //new Audio('file.mp3').play()

		}


	//MAKING THE FUNCTIONS RUN

		 musicGenre.forEach(button => button.addEventListener('click', changeMusicGenre));
		 musicGenre.forEach(button => button.addEventListener('click', startconcert));
		 theSounds.forEach(piece => piece.addEventListener('dragstart', drag));
		 theSounds.forEach(piece => piece.addEventListener('dragover', dragover));


    //ADDING VARIABLES TO THE ARRAY OF A CURRENT VARIABLE

		for (let doit of theAnimals) {

		doit.addEventListener('dragover', dragover);
		doit.addEventListener('drop', drop);
	}


	changeMusicGenre.call(musicGenre[0]);

	    for (noisy of theSounds) {
	    	noisy.addEventListener('dragend', playsound);
	    }


		 changeMusicGenre.call(musicGenre[0]);


})();
