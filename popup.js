const index = document.querySelector('div#gen-index');

window.onload = function (element) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            { file: 'gen-index.js' });
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: `console.log(${JSON.stringify(index)})`}
        )
    });
};

/* Create the index */
function createIndex(sectionList) {
    const indexTitle = document.createElement('div');
    let text = document.createTextNode('Index');
    indexTitle.appendChild(text);
    index.appendChild(indexTitle);
    for (let section of sectionList) {
        let div = document.createElement('div');
        let a_link = document.createElement('a');
        let text = document.createTextNode(section.title);
        a_link.href = section['link'];
        a_link.appendChild(text);

        div.appendChild(a_link);
        div.style['text-indent'] = (20 * section.level) + 'px';

        index.appendChild(div);
    }
    return index;
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (sender.tab && request.sections) {
            res = createIndex(request.sections);
        }
        sendResponse({result: res})
    });