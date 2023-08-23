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

Relied heavily on the Web3 schools documentation on JS games to learn about canvas + component building [https://www.w3schools.com/graphics/game_controllers.asp] this isn't the right link

Keydown events from Unity [https://docs.unity3d.com/ScriptReference/KeyCode.DownArrow.html][https://www.tutorialspoint.com/detecting-arrow-key-presses-in-javascript#:~:text=onkeydown%20JavaScript%20event%20handler%20by%20passing%20arrow%20key%20unique%20codes.&text=When%20the%20script%20executed%2C%20it,an%20alert%20%E2%80%9Cdown%20key%E2%80%9D.][https://www.w3schools.com/jsref/event_onkeypress.asp``]

Web3Schools recommends .keyCode method, but this is deprecated. The more suitable method is .key 

Right baout here is where the documentation for the type of jump I want in my game isn't inthe documentation, so I have to experiment

Looked into managing bitmap scaling re responsivness, added constant w/h 

[https://www.javascripttutorial.net/javascript-dom/javascript-keyboard-events/]

[https://www.w3schools.com/jsref/canvas_drawimage.asp#:~:text=The%20drawImage()%20method%20draws,increase%2Freduce%20the%20image%20size.]
#
# To do List 
## Good
* "How to Play" div
* Use scaleRatio to make things scalable

## Better
* Parallax BG
* Some osrt of time flooring/delta time (24fps)
## Best
* Add tab icon in HTML header
* Add more social media cards to header
* Add touch screen control [https://www.w3schools.com/graphics/game_controllers.asp]


Sources:
[https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener]
[https://www.w3schools.com/howto/howto_js_animate.asp#:~:text=JavaScript%20animations%20are%20done%20by,small%2C%20the%20animation%20looks%20continuous.]
[https://developer.mozilla.org/en-US/docs/Web/API/Web_components]
[https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement]
[https://www.w3schools.com/graphics/game_components.asp]
[https://www.cozyroc.com/ssis/javascript-parameters#:~:text=JavaScript%20Task%20and%20JavaScript%20Component,of%20the%20task%2Fcomponent%20editor.]


Game interval  : [https://codeincomplete.com/articles/javascript-game-foundations-the-game-loop/] 


Player's x and y co-ords are declared with "let" instead of "const" as I haven't made my mindup about the amount the player will be able to move him yet 

Player and line are no longer drawn on canvas. For player I suspect the file is too big to load between frames. Possible fix: vector graphic. For line no idea why it disappeared

Trying switch cases instead of if else because need multiple button controls 

Collision is working BUT collision box is from top of player's head 

Approaching physics like in previous games. JS does not have inbuilt gravity/velocity like I thought.

Passing the player jump function into the up arrow case [https://cmorinan.medium.com/passing-functions-as-arguments-in-javascript-tips-and-pitfalls-d29bbd4522a9]

Using basic physics to add in velocity -- might be a weird way to calculate. Similar principles to "ease" in animation, get exponential change over time. Therefore, speed*acceleration = velcity 

Change out the switch cases for separate functions, as I'm not sure about switch cases and functions

For speedX/speedY [https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code]

Note for tomorrow = start on speed 

[https://developer.ibm.com/tutorials/wa-build2dphysicsengine/] <== for physics equations>

Delta time as used in C# projects

JUMP WORKS!!!!


Player lands under floor [https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection]


Prevent player from double jump 

Fixed. Player position set to on ground on completeion of jump

JS file is getting messy. Make new class file for obstacles [https://bobbyhadz.com/blog/javascript-import-class-from-another-file][https://www.w3schools.com/js/js_classes.asp][https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes]

obstacles need to be random, move twd player on x axis and drawn from file [https://www.w3schools.com/graphics/game_obstacles.asp]

Can generate obstables in canvas using push method maybe

Rejig keyboard controls [https://developer.mozilla.org/en-US/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard]

Obstacle collision handling attempt 1 [https://blog.thejaytray.com/canvas-basics-06-collision-detection/]

Objects collide when the distance between them = 0; 
Could check if dis = 0 within a function 

 

if (distanceBetweenObjects === 0) {
    gameOver();
}

function distanceBetweenObjects(player, object) {
    if (playerArea is inside objArea) {
        return 0;
    }
}
