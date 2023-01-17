# chatgptisdown

See if ChatGPT is down.

```js
import { bypassDowness, getSessionToken } from "chatgptisdown";

await bypassDowness(10); // wait for login page to load, that is 10 milliseconds wait before trying to reload page

await getSessionToken(true); // get session token and save it to session_token.txt, true to close the browser after getting the token, false to keep it open
```

![POC](https://i.imgur.com/XYYWdJM.gif)
