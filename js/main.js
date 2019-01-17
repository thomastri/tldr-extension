chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        if (message.action === "clicked_browser_action") {
            const url = message.url;
            console.log(url);

            // since my pea brain can't understand callbacks we're gonna have this shit for the time being
            summarize(url, function(result) {
              console.log(result);
              //reduce();
            });

        }
    }
);

function summarize(url, callback) {
    // request to make API call
    const request = new XMLHttpRequest();
    request.open('GET', 'https://mercury.postlight.com/parser?url=' + url);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('x-api-key', 'Rp4Axlhwp4u5NFIM5wCkrjsNt2UgBXBnL9sGyX7f');

    //var data;
    request.onload = function () {
        callback(JSON.parse(this.response).content.replace(/<(?:.|\n)*?>/gm, ''));
    };
    request.send();
}

function reduce() {
    const awsRequest = new XMLHttpRequest();
    awsRequest.open('GET', 'https://jldsffc2v5.execute-api.us-east-1.amazonaws.com/prod/tldrService');
    awsRequest.setRequestHeader('x-api-key', '7hsKqeBVCv5xxfGu6IRl39jJf4ZWMJ1079Mfr2Wu');

    awsRequest.send();
    console.log(awsRequest);
}