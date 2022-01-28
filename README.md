# RPNapes

<!-- [Reverse Polish Notation Calcamatron](https://napesweaver.github.io/rpnapes/) -->
<a href="https://napesweaver.github.io/rpnapes/" target="_blank">Reverse Polish Notation Calcamatron</a>



## Calcamatron

My first and favorite JS project - much of the code still needs refactoring.

This calcamatron operates using Reverse Polish Notation and / or algebraically. Also, it is programmable. The UI includes a visible, interactive, stack that can be saved to a cookie. Complex numbers and units are supported as well as opening and saving files.

The project does not use any JQuery and Works offline. Some effort has been made to keep it compatible for backwardly browsers.

![Calcamatron](images/screenshots/rpnapes.jpg)

![Shifted calcamatron](images/screenshots/rpnapes-2.jpg)

Example JavaScript snippet:

`maxCount = prompt('Enter a number number','25');`

`getFizzBuzz = function(w){ word = w;if (w % 3 === 0) word = 'fizz'; if(w % 5 === 0) word = 'buzz'; if (w % 15 === 0) word = 'fizzbuzz'; return word}`

`for(w = 1; w <= maxCount; w++){ word=getFizzBuzz(w); $('txt-input').value=''; $('txt-input').value=word; enterInput(); }`

## Notes
A separate interface for note taking is also implemented.

![Notes](images/screenshots/notes.jpg)

![Notes](images/screenshots/notes2.jpg)

Thanks to [Mathjs.org](https://mathjs.org/) for the math.js library. Made implementing complex maths and formatting with engineering notation easy!

Opening and saving text files is supported thanks to Eli Grey's [FileSaver.js](https://github.com/eligrey/FileSaver.js/).

Darryl Snow's [moveCursorToEnd](https://gist.github.com/darryl-snow/3990793) function saved the day in my attempts to wrangle with mobile keypads.

The [stopwatch](https://tinloof.com/blog/how-to-build-a-stopwatch-with-html-css-js-react-part-2/) tutorial by Omar Benseddik made including that feature (and timer) too tempting.

## Tricorder

![Tricorder](images/screenshots/tricorder.jpg)

The tricorder doesn't do much. It displays a weather forecast and weather map, from [darksky.net/forecast](https://darksky.net/forecast) and [maps.darksky.net](https://maps.darksky.net) There are also a few [Shoutcast](https://directory.shoutcast.com/) Internet radio stations and YouTube videos embedded in iFrames. Maybe some other useful links.

The original tricorder image can be found on [IMGBIN](https://imgbin.com/png/7Ay8HnU3/medical-tricorder-star-trek-x-prize-foundation-hypospray-png). Thanks to keiske84.