// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            "message": "clicked_browser_action"
        });

        chrome.browserAction.onClicked.addListener(function() {
            console.log('What should we name the worm? I was thinking Senior is a good, wise name');
            // request to make API call
            var request = new XMLHttpRequest();
            //var url = window.location.href;
            var url = 'https://news.avclub.com/folks-let-s-do-this-snowpiercer-is-a-sequel-to-willy-1829467096';

            request.open('GET', 'https://mercury.postlight.com/parser?url=' + url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('x-api-key', 'Rp4Axlhwp4u5NFIM5wCkrjsNt2UgBXBnL9sGyX7f');

            request.onload = function() {
                // Begin accessing JSON data here
                var data = JSON.parse(this.response);
                console.log(data.title);
                
                // Strips HTML from the content
                console.log(data.content.replace(/<(?:.|\n)*?>/gm, ''));
            }

            request.send();
        })
    });
});