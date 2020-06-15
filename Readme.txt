#Farmy


Dev Notes

Concept: Drag and Drop Music Mixer App

Create a UI with draggable "Tracks (sound)"; User drags each track represented with an object and place it over the character it choose, immediatly the track starts to reproduce. A select button in the left side of the page will contain different scenarios (img) for different musical genres, there will be a Reset button that restart the whole game.

Tracks Music Mixer Brakdown

- The user drag a track(sound) from the sounds zone and drop it over the character that matches its sound.
-Buttons have a preview image of the kind of scneario user choose, it allows it to see what kind of sound track it will reproduce.
-Need a restar button
-Don't allow place several tracks on a same character
-Allow removing tracks from the characters and place it again in the sound zone? To be added later


JavaScript
 
Select buttons -> will have to store an index to the current/active puzzle using a custom data
attribute or ID (attribute is probably more semantically correct)
- On a click, use the “this” keyword to retrieve the attribute from the active button
- This will be 0, 1, 2, or 3 because we have 4 pieces and it’ll be a NodeList (mostly the
same as an array -> 0-based index)
- Take that 0, 1, 2, or 3 and find all of the corresponding pieces in the images folder -
these are named in a repeating pattern (topLeft, topRight, bottomLeft, bottomRight 0
through 3)
- Need an array that contains just the image names without numbers/indexes, so that we
can use that to rebuild the image paths that we’re after
- On a click, loop through the placeholder array and append the correct index to the
names that we want - so topLeft0.jpg, topRight0.jpg, bottomLeft0.jpg, bottomRight0.jpg
- Can either create the images on the fly or reset the image sources as we go to change
them to the current puzzle pieces
- Also need to empty out the drop zones so that we can drag new pieces in (debug this)
    

The name of my music mixer project is Farmy, it is easy to learn which makes it more confortable for the users when think about the app.

It will be an one page web where I will implement drag and drop functionality to load audio clips and create
a dynamic audio experience, trigger animation, and play a compiled audio track.

Create a UI with draggable sounds pieces; user drags each piece to a drop zone (Band) to create its own sound track. When the user choose a different band, the entire should reset with the new draggable sounds and leave the band empty.

Farmy Breakdown:
- User drags a sound piece from the bottom sound area to the drop zone and place it in one of the five characters(animals) in there.
-Each piece of sound will have a sign on it that users eventually will start to differentiate and match with each sound.
-Replay will have a reset button.
-Allow removing Sound pieces/drag back to the bottom? To be added later 

Files:
I am going to include SVG files, .mp3 files

Functions:
JavaScript .mp3 reproduction
JavaScript Drag and Drop
JavaScript Events and Functions

Design:
Replay app will have many Characters tan will open their mouths when the JavaScripts.

 

