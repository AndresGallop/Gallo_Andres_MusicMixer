(() => {
	console.log('fire!');

	const musicGenre = document.querySelectorAll('#buttonHolder img'),
	      theAnimals = document.querySelectorAll('.drop'),
	      scenario = document.querySelector('.sound-board');


	let animalNames = ["left", "midLeft", "midRight", "right"],
	    theSounds = document.querySelectorAll('.sound'),
	    audio = document.querySelector("audio"),
			theGenres = document.querySelectorAll(".concert");




	//FUNCTIONS

		function changeMusicGenre(event) {

			console.log('Let´s play');
			scenario.style.backgroundImage = `url(images/genre${this.dataset.bgkey}.jpg)`;

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


				event.target.appendChild(document.querySelector(`#${soundOn}`));

		}



		function playsound () {
			event.preventDefault();


			console.log('Proving if it works');
	    	// the 'this' keyword refers to the image you've clicked on
	    	let currentTrack = `assets/${this.dataset.track}`; //ESTO ES DINAMICO, LO QUE SIGNIFICA QUE VA A CAMBIAR


	    	audio.src = currentTrack;
	    	audio.load();//Load method loads whatever resource(src) you indicate

	    	// Aqui estoy llamando la funcion que tengo aqui debajo, se llama playAudio
           playAudio();
	    }

	    function playAudio() {
	    	// play the audio track
	    	audio.play();              //<------Es una funcion porque tiene los brackets ahí
		}


		function startconcert () {



			console.log('Proving if it works');
	    	// the 'this' keyword refers to the image you've clicked on
	    	let musicalscenario = `assets/${this.dataset.track}`; //ESTO ES DINAMICO, LO QUE SIGNIFICA QUE VA A CAMBIAR


	    	audio.src = musicalscenario;
	    	audio.load();//Load method loads whatever resource(src) you indicate

	    	// Aqui estoy llamando la funcion que tengo aqui debajo, se llama playAudio
           playconcert();
	    }

	    function playconcert() {
	    	// play the audio track
	    	audio.play();              //<------Es una funcion porque tiene los brackets ahí
		}



		/*function playsound2 (event) {

			console.log('great song');

			let card1 = event.keyCode;

		//take card1 (the KeyCode) and find the matching audio element
        //using the custom data-key attribute

        //ESTA VARIABLE BUSCA SI EL CODIGO (Keycode = 85 por ejemplo) EXISTE Y LO GUARDA EN ESTA MISMA
        //Y SELECCIONA EL CÓDIGO DE LA VARIABLE CARD1 PORQUE CARD1 = (Keycode = 85 por ejemplo) AHORA
		let card2 = document.querySelector(`audio[data-track="${card1}" ]`);



		//if you have a match, play card2 (the matching audio element)
		//Si cogió algo (Keycode = 85 por ejemplo) pues reproduzcalo parce
		if (card2) { card2.play(); }

		//debugger;

		}*/



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

	    for (noisy of theSounds) {
	    	noisy.addEventListener('dragend', playsound);
	    }


		 changeMusicGenre.call(musicGenre[0]);






})();
