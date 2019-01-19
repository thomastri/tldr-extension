chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.action === "clicked_browser_action") {
            const url = message.url;
            console.log(url);

            // Open pop-up window with our custom HTML
            window.open('', 'app', 'resizable=yes,height=400,width=400');

            /*
            TODO:
            - get new popup window to load html/popup.html
            - populate popup.html with 'result' from our API
            - get good at front end
            */


            // window.document.body.insertAdjacentHTML('afterbegin', 'html/popup.html')

            summarize(url, function (result) {
                reduce(result, function (result) {
                    alert(result);
                    // window.document.write(result);
                });
            });

        }
    }
);

/**
 * Summarize a url via the postlight api and return via the function "callback" which accepts a single string as a param
 * @param url - page to summarize
 * @param callback - function that has a single parameter which will contain the summary in string form
 */
function summarize(url, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://mercury.postlight.com/parser?url=' + url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('x-api-key', 'Rp4Axlhwp4u5NFIM5wCkrjsNt2UgBXBnL9sGyX7f');

    const htmlTagRegex = /<(?:.|\n)*?>/gm;
    const escapedHTMLChar = /&(?:.|\n)*?;/gm;
    const nonSpaceWhitespace = /[^\S ]+/gm;
    //var data;
    request.onload = function () {
        callback(JSON.parse(this.response).content
            .replace(htmlTagRegex, '')
            .replace(escapedHTMLChar, '')
            .replace(nonSpaceWhitespace, '')
        );
    };
    request.send();
}

/**
 * Condense the summary into a couple sentences
 */
function reduce(summary, callback) {
    const awsRequest = new XMLHttpRequest();
    awsRequest.open('PUT', 'https://jldsffc2v5.execute-api.us-east-1.amazonaws.com/prod/tldrService');
    awsRequest.setRequestHeader('x-api-key', '7hsKqeBVCv5xxfGu6IRl39jJf4ZWMJ1079Mfr2Wu');
    awsRequest.onload = function () {
        callback(this.response);
    };
    awsRequest.send('{"summary":"' + summary + '"}');
}