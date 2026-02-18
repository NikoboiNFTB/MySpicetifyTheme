// ==UserScript==
// @name         Hide Spotify Unwanted Buttons & Links + Remove Red Background
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Hides Spotify web UI buttons/links and removes unwanted red background
// @match        https://open.spotify.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function hideElements() {
        const selectors = [
            'a[href="/download"].Button-sc-1dqy6lx-0',            // Install App
            'button[data-testid="whats-new-feed-button"]',        // What's New
            'button[data-testid="friend-activity-button"]',       // Friend Activity
            'button[data-testid="browse-button"]',                // Browse
            'a[href*="spotify.com/premium"]',                     // Upgrade to Premium link
            'a[href*="spotify.com/download"]',                    // Download link
            'a[href*="support.spotify.com"]',                     // Support link
            'button[data-testid="upgrade-button"]',               // Explore Premium button
            'a[href="/"].XkJKUsFLQrqnS2jNdVe4',                   // Spotify logo link
            '.HnVkTECZ2a98QALFTkdq'                               // Red background container
        ];

        selectors.forEach(sel => {
            document.querySelectorAll(sel).forEach(el => el.remove());
        });
    }

    // Observe dynamically loaded elements
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial run
    hideElements();
})();
