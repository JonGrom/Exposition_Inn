//Tying my js to the emoji I'm using as a button
const modeToggle = document.querySelector('#🔊');

//tying my js to the body so I can easily swap all colors
const song = document.querySelector('#speaker-icon');

//getting a variable tied to whatever state we have, if any, from the dark/light mode
let chosenMode = '🔊';
if (modeToggle) {
const playStop = function() {
    if (chosenMode == null || chosenMode === '🔊') {
        song.pause();
        modeToggle.textContent = '🔇';
        console.log("The music mode is 🔇");
    } else if (chosenMode === '🔇') {
        song.play();
        modeToggle.textContent = '🔊';
        console.log("The music mode is 🔊");
    }
}
playStop();}

//Regardless of whether it renders as a sun or moon, the event listener allows the user to toggle between the two accurately, and it sets to state so reloaded pages will have whatever state the user left off with.
    //I was able to make this really simple by just having a light and dark class for everything in the body.
if (modeToggle) {
    modeToggle.addEventListener('click', function (event) {
        event.preventDefault();
        if (song.paused) {
            song.play();
            modeToggle.textContent = '🔊';
            localStorage.setItem('modeStored', '🔊');
            console.log('The music has been changed to 🔊');
        } else if (song.play) {
            song.pause();
            modeToggle.textContent = '🔇';
            localStorage.setItem('modeStored', '🔇');
            console.log('The music mode has been changed to 🔇');
        }
    })};