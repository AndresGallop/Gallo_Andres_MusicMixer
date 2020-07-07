(() => {
	console.log('fire!');

	const musicGenre = document.querySelectorAll('#buttonHolder img'),
	      theSounds = document.querySelectorAll('.sound'),
	      theAnimals = document.querySelectorAll('.drop'),
	      scenario = document.querySelector('.sound-board');


	let animalNames = ["left", "midLeft", "midRight", "right"];


	//FUNCTIONS

		function changeMusicGenre(event) {

			console.log('Let´s play', event.target.id);
			scenario.style.backgroundImage = `url(images/genre${this.dataset.bgkey}.jpg)`;

			}

		function drag(event) {

			console.log('dragging me');
			event.dataTransfer.setData("soundtaken", this.id);

		}

		function dragover (event) {

			event.preventDefault(); //This makes the browser allows me to make what I want
		}

		function drop(event) {

			console.log('dropped me');
		}



	//MAKING THE FUNCTIONS RUN		

		 musicGenre.forEach(button => button.addEventListener('click', changeMusicGenre));
		 theSounds.forEach(piece => piece.addEventListener('dragstart', drag));
		 theSounds.forEach(piece => piece.addEventListener('dragover', drop));


		 changeImageSet.call(musicGenre[0]);






})();