# chatgptisdown

wanna bypass/access chatgpt being down and login/register and use their service? this is the package for you!

## Installation

```bash
npm i chatgptisdown
```

## Example

```js
import { bypassDowness, getSessionToken } from "chatgptisdown";

await bypassDowness(10); // wait for login page to load, that is 10 milliseconds wait before trying to reload page

await getSessionToken(true); // get session token and save it to session_token.txt, true to close the browser after getting the token, false to keep it open
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
