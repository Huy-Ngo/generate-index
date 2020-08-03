/* Check if the element already exists*/
function check() {
    const els = document.querySelectorAll('#custom-index');
    return els.length > 0;
}

/* Get heading level, link to heading, and the title for each heading */
function getSectionList() {
    let nodes = document.querySelectorAll('h1, h2, h3');
    const sectionList = [];
    nodes = Array.from(nodes)
    for (let node of nodes) {
        if (node.id == '') {
            continue;
        }
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
    const body = document.querySelector('body');
    const index = document.createElement('div');
    const indexTitle = document.createElement('div');
    let text = document.createTextNode('Index');
    indexTitle.appendChild(text);
    index.appendChild(indexTitle);
    for (let section of sectionList) {
        let div = document.createElement('div');
        let a_link =  document.createElement('a');
        let text = document.createTextNode(section.title);
        a_link.href = section['link'];
        a_link.appendChild(text);

        div.appendChild(a_link);
        div.style['text-indent'] = (20 * section.level) + 'px';

        index.appendChild(div);
    }
    index.id = 'custom-index';
    index.style.border = '1px solid black';
    index.style.position = 'absolute';
    index.style.top = 0;
    index.style.left = 0;
    index.style.background = 'white';
    index.style.zIndex = 1;
    body.appendChild(index);
}

if (!check()) {
    const sectionList = getSectionList();
    createIndex(sectionList);
}