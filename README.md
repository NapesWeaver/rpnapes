# RPNapes
[Reverse Polish Notation Calcamatron](https://napesweaver.github.io/rpnapes/)

This has been an ongoing project since my earliest coding in JS. It works well, is rather spaghettified and contains a number of stubs (I still need to implement maths for imaginary numbers, for instance).
The code I lifted from [Stack Overflow](https://stackoverflow.com/) and similar sites is especially good ;)

This project does not use any JQuery and Works offline :)

## Calcamatron

This calcamatron makes use of a visible stack . Units are supported (no conversion as yet).

![Calcamatron](images/screenshots/rpnapes.jpg)
![Shifted calcamatron](images/screenshots/rpnapes-2.jpg)

Features include the ability to load and run simple code scripted thus:

`maxCount = prompt('Enter a number number','25');`

`getFizzBuzz = function(w){ word = w;if (w % 3 === 0) word = 'fizz'; if(w % 5 === 0) word = 'buzz'; if (w % 15 === 0) word = 'fizzbuzz'; return word}`

`for(w = 1; w <= maxCount; w++){ word=getFizzBuzz(w); $('txtInput').value=''; $('txtInput').value=word; enterFunction(); }`

## Notes
A separate interface for note taking is also implemented.

![Notes](images/screenshots/notes.jpg)

Stack and Notes can be saved independently, locally, to browser cookie. 
Saving and opening text files is supported also - with special thanks to Eli Grey for the use of [FileSaver.js](https://github.com/eligrey/FileSaver.js/).

Thanks to Darryl Snow. Your [moveCursorToEnd](https://gist.github.com/darryl-snow/3990793) function saved the day in my attempts to wrangle with mobile keypads.

## Tricorder

![Tricorder](images/screenshots/tricorder.jpg)

The original tricorder image can be found on [IMGBIN](https://imgbin.com/png/7Ay8HnU3/medical-tricorder-star-trek-x-prize-foundation-hypospray-png). Special thanks to keiske84 :)

The tricorder doesn't do too much. It displays a weather forecast and weather map, from [darksky.net/forecast](https://darksky.net/forecast) and [maps.darksky.net](https://maps.darksky.net) And there are few YouTube videos and [TuneIn](https://tunein.com/radio/home/) Internet radio stations embedded in iFrames.

## Acknowledgements

There are many snippets of code for which I never kept track of the original source. Some from GitHub and many from Stack Overflow and elsewhere. I apologize for not having been with it. As I rework and rediscover the code for myself I do intend to update my thanks whenever I can. To all the unsung hero's of coding, hat's off to you ♥ ♥ ♥

![Hat's off to you!](images/screenshots/tippy-hat.gif)