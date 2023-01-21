# chatgptisdown
[![npm version](https://badge.fury.io/js/chatgptisdown.svg)](https://badge.fury.io/js/chatgptisdown) [![npm downloads](https://img.shields.io/npm/dt/chatgptisdown)](https://www.npmjs.com/package/chatgptisdown) [GitHub license](https://img.shields.io/github/license/optionsx/chatgptisdown)

wanna bypass/access chatgpt while it's down and then login/register to use their service? this is the package for you!
discord:shêr#0196
## Installation

```bash
npm i chatgptisdown
```

## Example

```js
import { bypassDowness, getSessionToken } from "chatgptisdown";

await bypassDowness(10); // 10 millisecond between reloads, by default it's 0

await getSessionToken(true); // saves it to session_token.txt afterwards, true to close the browser, by default it's false
```

![POC](https://i.imgur.com/XYYWdJM.gif)

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Disclaimer

```txt
This is for educational purposes only. I am not responsible for any misuse of this package.
I am not affiliated with chatgpt in any way.
This package is not meant to be used for malicious purposes.
```
