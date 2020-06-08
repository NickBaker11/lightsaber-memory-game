# Lightsaber Memory Game
This website will be intervactive for the user through the use of a fun memory game that they can play.
It is based around a sequence of coloured 'lightsabers' which will activate (light up) and then deactivate, in a 
particular order. The user will be required to memorise and then successfully copy the sequence by clicking
on the correct lightsabers in the correct order. If the user follows the correct pattern then they will be successful, an akert will pop up and tell them so and the next level be unlocked. If unseuccessful, a different alert will pop up encouraging the user to try again.

There will be additional intervactivity where the user can input their name which will be displayed whilst they
play. They will also be able to change between two background themes- Light or Dark Side. 

## UX
* As a user I would like to play a memory game that is progressively more challenging.
* As a user I want to play the game and get a response as to whether I entered the correct sequence or if I
  got it wrong. I would expect the game to run smoothly and to be built so that I cannot break it accidently.
* As this memory game is themed, I may want to know more about what inspired it.

#### Wireframe
Here is a link to my wireframe- https://github.com/NickBaker11/lightsaber-memory-master/blob/master/assets/wireframes/Mockup%20Milestone%20Project%20no.2.pdf
It can also be found in assets/wireframes in my project

## Features
* Theme choice- Clicking on ls-btn or ds-btn allows the user to choose a colour theme, either blue or red. Once      playing the game the user may switch sides to the alternate theme.
* Name input- There is a text box where the user can enter their name to be displayed whilst they are playing.
  the game. 
* Three Levels - Gives the user a greater challenge the higher the level.
* A link to the Wookieepedia Star Wars fandom page - https://starwars.fandom.com/wiki/Main_Page

## Future Enhancements
* In the future I would like to add my own alerts so that they give a better look to the site.
* I also intended to have background music that the user could mute. I implemented it but was unable to source      material so removed the unused code.

## Technologies Used
* Bootstrap- https://getbootstrap.com/ - to assist with page layout.
* W3C -https://jigsaw.w3.org/css-validator/ - for validating my HTML and CSS.
* jQuery- https://jquery.com/ - to assist with event handling.
* Code Beautify - https://codebeautify.org/htmlviewer/ - to beautify my code for improved readability.
* Esprima - https://esprima.org/demo/validate.html - to validate my JavaScript.

## Testing
I validated my code using the W3C and Esprima validators.
#### Maunual Testing
* Sequences and buttons
    -Clicking on each of the 'lightsaber-handles' correctly activiates the corresponding 'lightsaber' as expected.
    -Clicking on each of the 'begin' buttons starts the sequence for the currently visible level as expected.
    -Clicking each of the 'submit' buttons successfully begins the if else statement to check if the arrays are     the same as expected.
    -Some buttons either disappear or are disabled before and during the the active sequence. Those that disappear  are the level buttons, the 'begin' buttons and the 'submit' buttons(this is initially hidden anyway but hides  again if the  user starts the sequence again). These are the expected outcomes.
     The lightsaber handles are disabled during the sequence and when a user moves to another level to prevent any activations that would interrupt the pre set sequence.
* Links
    -When clicking on the Wookieepedia link in the footer of each page, it takes you to the Wookiepedia (https://starwars.fandom.com/wiki/Main_Page) page in a new tab as expected.
* Different screen sizes
    -When increasing the size of the screen, the images adjust so that they are relative to that screen size. The   interactive parts and text do not change size but I believe they are of sufficient size that is does not       negatively affect the user.
    -For mobile devices, the background images are removed using a media query as they stretch too much and         distort.
    -I sent my live link to friends and family, asking them for feedback and screenshots to see how it looked on    their devices with positive results. This gave me insight on issues to fix for different screen sizes.
#### Automated Testing
* I attempted to create an automated test to check if the arrays the user input are the same as the preset one. I    was unable to successfully implement this and neither of the tests work. I have left the files in which can be     found in assets/testing.

## Deployment
I deployed my website using GitHubs GitHub Pages. To do this, I went to the settings in my lightsaber-memory-master repository, scrolled down to the GitHub pages section and click on the 'source' dropdown and selected 'master branch'. GitHub pages then generates the URL automatically. Here is the link- https://nickbaker11.github.io/lightsaber-memory-master/

## Credits
#### Code
* Lines 475-483 in main.js is from W3school https://www.w3schools.com/howto/howto_js_active_element.asp to add an    'active' button.
#### Media      
* https://www.soundboard.com/sb/LightsaberSounds for the coolsaber.mp3 and SaberOn.mp3 audio effects.
* https://www.pinterest.ie/pin/307441112045747256/ for lukesw.jpg
* https://www.denofgeek.com/comics/star-wars-marvel-to-explore-darth-vaders-early-days-as-sith-lord/ for             'vader.jpg'
#### Acknowledgements
This project was inspired by my love of Star Wars 
