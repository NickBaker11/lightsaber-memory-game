# Lightsaber Memory Game
This website will be intervactive for the user through the use of a fun memory game that they can play.
It is based around a sequence of couloured 'lightsabers' which will activate (light up) and then deactivate, in a 
particular order. The user will then be required to memorise and then successfully copy the sequence by clicking
on the correct lightsaber. If the user follows the correct pattern then they will be successful and the next level 
be unlocked.

There will be additional intervactivity where the user can input their name which will be displayed whilst they
play. They will also be able to change between two background themes- Light or Dark Side. 

## UX
-As a user I would like to play a memory game that is progressively more challenging.
-As a user I want to play the game and get a response as to whether I entered the correct sequence or if I
got it wrong. I would expect the game to run smoothly and to be built so that I cannot break it accidently.
-As this memory game is themed, I may want to know more about what inspired it.
#### Wireframe

## Features
* Theme choice- Clicking on ls-btn or ds-btn allows the user to choose a colour theme, either blue or red. Once      playing the game the user may switch sides to the alternate theme.
* Name input- There is a text box where the user can enter their name to be displayed whilst they are playing.
  the game. 
* Three Levels - Gives the user a greater challenge the higher the level.
* A link to the Wookieepedia Star Wars fandom page - https://starwars.fandom.com/wiki/Main_Page
## Future Enhancements

## Technologies Used
* Bootstrap- https://getbootstrap.com/ - to assist with page layout.
* W3C -https://jigsaw.w3.org/css-validator/ - for validating my HTML and CSS.
* jQuery- https://jquery.com/ - to assist with event handling.
* Code Beautify - https://codebeautify.org/htmlviewer/ - to beautify my code for improved readability.
* Esprima - https://esprima.org/demo/validate.html - to validate my JavaScript.

## Testing
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
    -When reducing or increasing the size of the screen, the text and images adjust so that they are relative to    that screen size.
    -For mobile devices, the background images are removed using a media query as they stretch too much and         distort.
    -I sent my live link to friends and family, asking them for feedback and screenshots to see how it looked on    their devices with positive results. This gave me insight on issues to fix for different screen sizes.

## Deployment
I deployed my website using GitHubs GitHub Pages. To do this, I went to the settings in my lightsaber-memory-master repository, scrolled down to the GitHub pages section and click on the 'source' dropdown and selected 'master branch'. GitHub pages then generates the URL automatically. Here is the link- https://nickbaker11.github.io/lightsaber-memory-master/

## Credits
#### Code
* Lines 785-793 in main.js is from W3school https://www.w3schools.com/howto/howto_js_active_element.asp to add an    'active' button.

#### Content


#### Media      
* https://www.soundboard.com/sb/LightsaberSounds for audio effects.
* https://www.reddit.com/r/StarWarsBattlefront/comments/97c2g2/am_i_the_only_one_who_thinks_the_yoda_face_in/ for    'yoda.jp'
* https://www.denofgeek.com/comics/star-wars-marvel-to-explore-darth-vaders-early-days-as-sith-lord/ for             'vader.jpg'
#### Acknowledgements

