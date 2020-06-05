# Lightsaber Memory Game
This website will be intervactive for the user through the use of a fun memory game that they can play.
It is based around a sequence of couloured 'lightsabers' which will activate (light up) and then deactivate, in a 
particular order. The user will then be required to memorise and then successfully copy the sequence by clicking
on the correct lightsaber. If the user follows the correct pattern then they will be successful and the next level 
be unlocked.

There will be additional intervactivity where the user can input their name which will be displayed whilst they
play. They will also be able to change between two background themes- Light or Dark Side. 

## UX
This site is aimed at people who would like to play a simple memory game and may also have an interest in the Star Wars universe.
The user will want to play the game and get a response as to whether they entered the correct sequence or if they
got it wrong. I tested all sequences and buttons to ensure they work as expected. Some buttons and divs are either hidden or have their pointer events turned off during the sequences to prevent the user from inadvertently ruining their experience.
There is a link to wookieepedia.com - https://starwars.fandom.com/wiki/Main_Page - for those whose are interested in learning more about the Star Wars Universe.


## Features
* Theme choice- Clicking on ls-btn or ds-btn allows the user to choose a colour theme, either blue or red. Once      playing the game the user may switch sides to the alternate theme.
* Name input- There is a text box where the user can enter their name to be displayed whilst they are playing.
  the game. 
* Three Levels - Gives the user a greater challenge the higher the level.

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
    -Clicking on each of the 'lightsaber-handles' correctly activiates the corresponding 'lightsaber'.
    -Clicking on each of the 'begin' buttons starts the sequence for the currently visible level.
    -Clicking each of the 'submit' buttons successfully begins the if else statement to check if the arrays are the same.
    
* Links
    -When clicking on the Wookieepedia link in the footer of each page, it takes you to the Wookiepedia (https://starwars.fandom.com/wiki/Main_Page) page in a new tab.
* Different screen sizes
    -When reducing or increasing the size of the screen, the text and images adjust so that they are relative to    that screen size.
    -For mobile devices, the background images are removed using a media query as they stretch too much and         distort.
    -I sent my live link to friends and family, asking them for feedback and screenshots to see how it looked on    their devices with       positive results. This gave me insight on issues to fix for different screen sizes.

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

