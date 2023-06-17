# RPNapes

<!-- [Reverse Polish notation calcamatron](https://napesweaver.github.io/rpnapes/) -->
<a href="https://napesweaver.github.io/rpnapes/" target="_blank">Reverse Polish notation calcamatron</a>



## Calcamatron

My first and favorite JS project - much of the code still needs refactoring.

Created with engineering calculators like the HP 48 in mind, this calamatron is programmable with a command line interface. It operates using reverse Polish notation and algebraically. Complex maths have been implemented using the [math.js](https://mathjs.org/) library. The UI makes use of a visible, interactive, stack that can be saved, using cookies for persistent storage. Unit labeling is supported. Saving/loading files are supported thanks to Eli Grey's [FileSaver.js](https://github.com/eligrey/FileSaver.js/).

The project does not use any jQuery and Works offline. Some effort has been made to keep it compatible for backwardly browsers.

![Calcamatron](images/screenshots/rpnapes.jpg)

![Shifted calcamatron](images/screenshots/rpnapes-2.jpg)

Example JavaScript snippet:

`maxCount = prompt('Enter a number number','25');`

`getFizzBuzz = function(w) { word = w; if (w % 3 === 0) word = 'fizz'; if(w % 5 === 0) word = 'buzz'; if (w % 15 === 0) word = 'fizzbuzz'; return word }`

`for (w = 1; w <= maxCount; w++) { word = getFizzBuzz(w); $('txt-input').value = ''; $('txt-input').value = word; enterInput(); }`

`updateDisplay();`

## Notes
Separate interface for notes...

![Notes](images/screenshots/notes.jpg)

![Notes](images/screenshots/notes2.jpg)

Thanks to [Mathjs.org](https://mathjs.org/) for the math.js library. Made implementing complex maths and formatting with engineering notation, almost, easy.

Opening and saving text files is supported thanks to Eli Grey's [FileSaver.js](https://github.com/eligrey/FileSaver.js/).

Public IP address are obtained thanks to the [IPify](https://www.ipify.org/) Public IP Address API.

The [stopwatch](https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/) was lifted from a tutorial by Omar Benseddik. Had to add it ;)

## Tricorder

![Tricorder](images/screenshots/tricorder.jpg)

The Tricorder doesn't do too much. It only exists because I wanted to map some buttons to an image and, also, I wanted to see a Tricorder on my phone. It displays weather maps from [Windy.com](https://windy.com) and [The National Weather Service](https://radar.weather.gov/region/conus/standard), an [Orbital Mechanics](https://orbitalmechanics.info/) program, the American Astronomical Society's [WorldWide Telescope](https://worldwidetelescope.org/webclient/) web client, [Wolframalpha](https://www.wolframalpha.com/), a few [Shoutcast](https://directory.shoutcast.com/) radio stations and [YouTube](https://www.youtube.com/) videos - embedded in iFrames.

The original Tricorder image can be found on [IMGBIN](https://imgbin.com/png/7Ay8HnU3/medical-tricorder-star-trek-x-prize-foundation-hypospray-png). Thanks to keiske84.

![Twig](images/screenshots/tippy-hat.gif)