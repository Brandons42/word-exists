# Word Exists
Check if a word exists or not in English-- lightweight package with no extra dependencies.
## Installation
```
npm install word-exists --save
```
or
```
yarn add word-exists
```
## Usage
Simply pass in a string as a parameter and a Boolean will be output. Hyphenated compound words aren't counted as words.
```js
const wordExists = require('wordExists');

wordExists('word');
//true

wordExists('notaword');
//false
```
## Example Values
Word | Output
--- | ---
`'hello'` |  `true`
`'olleh'` | `false`
`'tic-tac-toe'` | `false`
`9` | `TypeError`

For more examples, see the [tests](https://github.com/Brandons42/word-exists/blob/master/wordExists.test.js).
## Author
I, [Brandon Suen](https://bsuen.netlify.com/), created this library. Feel free to check out any of my iOS apps if interested:
- [Quiz Watch](https://apps.apple.com/us/app/quiz-watch/id1454913754?ls=1), a fun trivia app
- [Geographist](https://apps.apple.com/us/app/geographist/id1470035851), a fun game for learning geography
- [MemRoll](https://apps.apple.com/us/app/memroll/id1459782811), in which you guess when the cameras in your camera roll were taken
