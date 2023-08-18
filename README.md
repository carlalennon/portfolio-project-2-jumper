Planning the project 

======= The plan =======

Jonathan needs a game for his website. Will collect deatails over the weekend


* A classic infinite run n jumper
* Character selector - select from pixel art of the four band mates
* They get bigger when selected
* The character runs a stage
* Jump to clear amps, crouch to clear mics on a stand
* Database for high scores 

==== Building the Project ======
// From old project

[ ---- Introducing JaVill----


---- Website Building -----

For my interactive site page, the client did not yet have their own website. However, they showed me some promotional shots they'd taken for their upcoming release. The tones were blank and white, with a water ripple foil cast over the set in gold. I chose to build my assets in a muted colours to match the JaVill branding. 

After our first conversation about this project, I drew the band members on a napkin as an example. The characters were 8-bit and 16-bit caracitures of the band members. 

--- Building log ---
First step - building the page. Went to W3 schools to freshen up on HTML basics. 
Built out the meta details in the header
Added twitter card for the band to share their game 
Plan for game, based on previous Unity build, div for game window, character div, obstacles are divs too 
It was at this point I found a site telling me how to build the game I wanted :( I'll have to build on what it says [https://medium.com/codex/making-the-easiest-javascript-game-b1a0b21794b4]
I have decided not to read the whole tutorial. For now.

Took a new route, drawing elements of the game using JS [https://www.w3schools.com/graphics/tryit.asp?filename=trygame_default_gravity]
JS has a gravity function? Great news
JS character movement uses some of the same principles of c# character movement that I have already learned ( += )

Drawing the canvas: 
When using HTML like this, the drawn box is referred to as the "canvas", the same as when using Adobe Flash in college. The canvas also uses something called "context" [https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D] denoted as ctx in the JS file.
The context can be set to 2D to allow the program to draw on the canvas. [https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext]. This can be useed to set an alpha value, for example adding a background of crowd paralax in the future. The desynchronized method decouples the drawing of the canvas from the event loop, so a background could change at a dufferent rate than a character for example.
I want my game to be full screen and responsive. When drawing the canvas at game start, I am unsing the innerWidth/innerHeight methods

Sprite not drawing, getting this error:Uncaught TypeError: Cannot read properties of undefined (reading 'drawImage')
    at window.onload (script.js:12:13)

Clearing the board: 
As I intend for the obstacles to be somewhat randomly generated, the clear method clears everything within the borders of the canvas using clearRect ]

Started new project 

Started again from scratch. Drawing the image [https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations][https://spicyyoghurt.com/tutorials/html5-javascript-game-development/setup-html5-canvas-game] 

Note for sprite animation: JS can silce and play sprites like Unity : [https://spicyyoghurt.com/tutorials/html5-javascript-game-development/images-and-sprite-animations]

The canvas is alway drawn from the upper left corner, and the positional co ords are relative to this. +x +y only

Project got easier after initial reading on canvases, as adding player controlis largely the same as unsing the c# unity intergraitions, whoch I leanred before for a pixel art job for a client 
#
# To do List 
## Good
* "How to Play" div
## Better
* Parallax BG
## Best
* Add tab icon in HTML header
* Add more social media cards to header


Sources:
[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]
[https://www.w3schools.com/howto/howto_js_animate.asp#:~:text=JavaScript%20animations%20are%20done%20by,small%2C%20the%20animation%20looks%20continuous.]
[https://developer.mozilla.org/en-US/docs/Web/API/Web_components]
[https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement]
[https://www.w3schools.com/graphics/game_components.asp]
[https://www.cozyroc.com/ssis/javascript-parameters#:~:text=JavaScript%20Task%20and%20JavaScript%20Component,of%20the%20task%2Fcomponent%20editor.]
