// ==UserScript==
// @name         Autofull Inoreader For Safari
// @namespace    aytacesmebasi
// @version      1.0
// @description  Automatically load full content article in Inoreader for Safari
// @author       aytacesmebasi
// @match        https://www.inoreader.com/all_articles
// @grant        none
// ==/UserScript==
 
//----- configure (change as desired) -----
const waitTime = 200; // time in ms to wait for page load (1 sec: 1000ms)
//-----------------------------------------
 
// Check and load full article if "article_dialog" is visible
function checkAndLoadFullArticle() {
    try {
        const articleDialog = document.getElementById('article_dialog');
        if (articleDialog && window.getComputedStyle(articleDialog).display === 'block') {
            const button = document.querySelector('.icon-article_topbar_mobilize_empty');
            if (button) {
                button.click();
            }
        }
    } catch (err) {
        console.log('An error occurred:', err);
    }
}
 
// Run the check on page load and at regular intervals
setInterval(checkAndLoadFullArticle, waitTime);
checkAndLoadFullArticle();