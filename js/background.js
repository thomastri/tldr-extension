// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // Send a message to the active tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id,
            {
                "message": "clicked_browser_action"

                // request to make API call
                var request = new XMLHttpRequest();
                request.open('GET', 'hhttps://mercury.postlight.com/parser?url=' + window.location.href);
                request.setRequestHeader('Content-Type', 'application/json');
                request.setRequestHeader('x-api-key', 'Rp4Axlhwp4u5NFIM5wCkrjsNt2UgBXBnL9sGyX7f');
            });
    });
});