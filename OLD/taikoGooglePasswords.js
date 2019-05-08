const { openBrowser, goto, write, click, closeBrowser } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await goto("google.com");
        await write("taiko test automation");
        await click("Google Search");
    } catch (e) {
            console.error(e);
    } finally {
            closeBrowser();
    }
})();
