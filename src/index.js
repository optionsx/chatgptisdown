import { firefox } from "playwright";
import { writeFileSync } from "fs";
const browser = await firefox.launch({ headless: false });
const context = await browser.newContext();
const page = await context.newPage();
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export async function AccessChatGPT({ timeout = 0 }) {
  try {
    let isCfpassed = false;
    while (true) {
      console.log("Waiting for login page");
      await page
        .goto("https://chat.openai.com/auth/login", {
          timeout: 2000,
        })
        .catch((err) => {});

      if (isCfpassed === false) {
        // extract cookies
        const cookies = await page.context().cookies();
        // see if cf_clearance cookie exist
        const cfClearance = cookies.find(
          (cookie) => cookie.name === "cf_clearance"
        );
        if (cfClearance)
          console.log("cf_clearance cookie found, reducing timeout");
        // check if cf_clearance cookie exists
        cfClearance ? (isCfpassed = true) : (isCfpassed = false);
      }
      await sleep(isCfpassed ? timeout : 2000);
      if (await page.$('text="Log in"')) {
        console.log("Found login page");
        break;
      }
    }
  } catch (error) {
    console.log(error);
  }
}
// todo: get session token
export const getSessionToken = async ({ closeBrowser = false }) => {
  const session_interval = setInterval(async () => {
    let cookies = await page.context().cookies();
    let cookie = cookies.find(
      (c) => c.name === "__Secure-next-auth.session-token"
    );
    cookie
      ? (console.log("session_token found"),
        clearInterval(session_interval),
        writeFileSync("session_token.txt", cookie.value))
      : console.log("session_token found, saved to session_token.txt");
    if (closeBrowser && cookie) await browser.close();
  }, 5000); // check every 5 seconds
};
