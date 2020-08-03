/* Check if the element already exists*/
function check() {
    const els = document.querySelectorAll('#custom-index');
    return els.length > 0;
}

/* Get heading level, link to heading, and the title for each heading */
function getSectionList() {
    const nodes = document.querySelectorAll('h1, h2, h3');
    const sectionList = [];
    nodes = Array.from(nodes)
    for (let node in nodes) {
        let level = parseInt(node.tagName[1]);
        let link = '#' + node.id;
        let title = node.innerText;
        sectionList.push({
            'level': level,
            'link': link,
            'title': title
        });
    }
    return sectionList;
}

/* Create the index */
function createIndex(sectionList) {
    document.createElement('div');
    for (let section in sectionList) {
        document.createElement('a');
        document.createTextNode(section.title);
    }
}