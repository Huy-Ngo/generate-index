// let popup = document.getElementById('gen-index');
window.onload = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: 'contentScript.js' });
    });
};
