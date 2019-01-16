chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            console.log(request.message);
            // request to make API call
            const request = new XMLHttpRequest();
            //var url = window.location.href;
            const url = 'https://news.avclub.com/folks-let-s-do-this-snowpiercer-is-a-sequel-to-willy-1829467096';

            request.open('GET', 'https://mercury.postlight.com/parser?url=' + url);
            request.setRequestHeader('Content-Type', 'application/json');
            request.setRequestHeader('x-api-key', 'Rp4Axlhwp4u5NFIM5wCkrjsNt2UgBXBnL9sGyX7f');

            request.onload = function () {
                // Begin accessing JSON data here
                const data = JSON.parse(this.response);
                console.log(data.title);

                // Strips HTML from the content
                console.log(data.content.replace(/<(?:.|\n)*?>/gm, ''));
            };

            const awsRequest = new XMLHttpRequest();
            awsRequest.open('GET', 'https://jldsffc2v5.execute-api.us-east-1.amazonaws.com/prod/tldrService');
            awsRequest.setRequestHeader('x-api-key', '7hsKqeBVCv5xxfGu6IRl39jJf4ZWMJ1079Mfr2Wu');

            //request.send();
            awsRequest.send();
            console.log(awsRequest);

        }
    }
);