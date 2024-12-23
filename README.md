# Ansi-color

Easily use 4 bit ANSI colors in your HTML or terminal

## Why

Well, because I can. And as lovely as Chalk is, it's a bit over engineered for use with NextJS and gives me errors than it was worth.

<ul>
 <li>Use with TypeScript or JavaScript.</li>
 <li>NextJS safe.</li>
 <li>Super simple. It's literally tiny.</li>
</ul>

## Installation

```sh
npm import ansi-color
```

## Usage

```javascript
ansi.color('Text goes here');
```

## Color Examples

| Foreground                                          | Background                                                               |
| --------------------------------------------------- | ------------------------------------------------------------------------ |
| <div style="color: black;">black</div>              | <div style="color: white; background: black;">bgBlack</div>              |
| <div style="color: red;">red</div>                  | <div style="color: black; background: red;">bgRed</div>                  |
| <div style="color: green;">green</div>              | <div style="color: black; background: green;">bgGreen</div>              |
| <div style="color: yellow;">yellow</div>            | <div style="color: black; background: yellow;">bgYellow</div>            |
| <div style="color: blue;">blue</div>                | <div style="color: black; background: blue;">bgBlue</div>                |
| <div style="color: magenta;">magenta</div>          | <div style="color: black; background: magenta;">bgMagenta</div>          |
| <div style="color: cyan;">cyan</div>                | <div style="color: black; background: cyan;">bgCyan</div>                |
| <div style="color: white;">white</div>              | <div style="color: black; background: white;">bgWhite</div>              |
| <div style="color: gray;">brightBlack</div>         | <div style="color: black; background: gray;">bgBrightBlack</div>         |
| <div style="color: lightcoral;">brightRed</div>     | <div style="color: black; background: lightcoral;">bgBrightRed</div>     |
| <div style="color: lightgreen;">brightGreen</div>   | <div style="color: black; background: lightgreen;">bgBrightGreen</div>   |
| <div style="color: lightyellow;">brightYellow</div> | <div style="color: black; background: lightyellow;">bgBrightYellow</div> |
| <div style="color: lightblue;">brightBlue</div>     | <div style="color: black; background: lightblue;">bgBrightBlue</div>     |
| <div style="color: violet;">brightMagenta</div>     | <div style="color: black; background: violet;">bgBrightMagenta</div>     |
| <div style="color: lightcyan;">brightCyan</div>     | <div style="color: black; background: lightcyan;">bgBrightCyan</div>     |
| <div style="color: white;">brightWhite</div>        | <div style="color: black; background: white;">bgBrightWhite</div>        |

<style>
.black {
    color: black;
}

.red {
    color: red;
}

.green {
    color: green;
}

.yellow {
    color: yellow;
}

.blue {
    color: blue;
}

.magenta {
    color: magenta;
}

.cyan {
    color: cyan;
}

.white {
    color: white;
}

.brightBlack {
    color: gray;
}

.brightRed {
    color: lightcoral;
}

.brightGreen {
    color: lightgreen;
}

.brightYellow {
    color: lightyellow;
}

.brightBlue {
    color: lightblue;
}

.brightMagenta {
    color: violet;
}

.brightCyan {
    color: lightcyan;
}

.brightWhite {
    color: white;
}

.bgBlack {
    color: white;
    background: black;
}

.bgRed {
    color: black;
    background: red;
}

.bgGreen {
    color: black;
    background: green;
}

.bgYellow {
    color: black;
    background: yellow;
}

.bgBlue {
    color: black;
    background: blue;
}

.bgMagenta {
    color: black;
    background: magenta;
}

.bgCyan {
    color: black;
    background: cyan;
}

.bgWhite {
    color: black;
    background: white;
}

.bgBrightBlack {
    color: black;
    background: gray;
}

.bgBrightRed {
    color: black;
    background: lightcoral;
}

.bgBrightGreen {
    color: black;
    background: lightgreen;
}

.bgBrightYellow {
    color: black;
    background: lightyellow;
}

.bgBrightBlue {
    color: black;
    background: lightblue;
}

.bgBrightMagenta {
    color: black;
    background: violet;
}

.bgBrightCyan {
    color: black;
    background: lightcyan;
}

.bgBrightWhite {
    color: black;
    background: white;
}
</style>
