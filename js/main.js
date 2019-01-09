chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            console.log(request.message);
            //var firstHref = $("a[href^='http']").eq(0).attr("href");
            //console.log(firstHref);
        }
    }
);