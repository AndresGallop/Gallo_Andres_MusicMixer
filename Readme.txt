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

#Problems and bugs

July 7 / 2020

I found that I can make the animals sound when click them so I changed the event to drop but now just the cat sound, for all the files, so I will make a research on it, I think it maybe is somehting about forEach. codes but I am not sure. Still haven´t solved my bugs for overposition of elements in a div, so I will limit each div to just one element at a time.
    