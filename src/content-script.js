chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "logToConsole") {
        console.log(JSON.stringify({
            type: "[Omnibug]",
            message: request.message,
        }));
    }
});
