(() => {
    // set up the puzzle pieces and boards
    const Bands = document.querySelectorAll('#buttonHolder img'),
        soundTracks = document.querySelectorAll('.sound-pieces'),
        characters = document.querySelectorAll('.sound-board'),
        gameBoard = document.querySelector(".sound-board");
    // add event handling here -> how is the user going to use our app?
    // what triggers do we need?

let imageNames = ["miaw", "guau", "pio", "beee"];

    function changeImageSet() { //ESTA ES PA CAMBIAR LAS PIEZAS++++++++++++++++++++++++
        // change all the image elements on the page -> draggable image sources

      imageNames.forEach((piece, index) => {
        soundTracks[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
      });//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        // let newBackgroundImage = `images/backGround${this.dataset.bgkey}.jpg`; (contenced down to one line)
        //dynamically changes the background image by grabbing the data number using bgkey

        gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;//----FONDO-----
    } // and set the drop zone background-------------------------------------------------------------------

    // debugger;
    function allowDrag(event) {
        console.log('started dragging an image: this one - ', event.target.id);

        event.dataTransfer.setData("draggedImg", this.id);

        //let the drag happen and store a reference of the ID of the element we're dragging
    }

    function allowDragOver(event) {
        event.preventDefault(""); //for next week
        console.log('dragged something over me')

    }

    function allowDrop(event) {
        console.log('dropped something on me');

        let droppedImage = event.dataTransfer.getData("draggedImg");
        let currentTrack = event.dataTransfer.getData('targetTrack');

        event.target.appendChild(document.querySelector(`#${droppedImage}`));
        //debugger;
    }


    // click on the bottom buttons to change the puzzle image we're working with
    Bands.forEach(button => button.addEventListener('click', changeImageSet));
    soundTracks.forEach(piece => piece.addEventListener('dragstart', allowDrag));

    characters.forEach(zone => {
        zone.addEventListener('dragover', allowDragOver);
        zone.addEventListener('drop', allowDrop);
    });
    //research call, apply and bind
    changeImageSet.call(Bands[0]); //empulates a click on the first button
})();
