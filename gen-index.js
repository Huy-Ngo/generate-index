/* Check if the element already exists*/
function check() {
    const els = document.querySelectorAll('#custom-index');
    return els.length > 0;
}

/* Convert title to heading ID */
function toID(text) {
    return text.toLowerCase().replace(/[^a-z]/, '-');
}

/* Get heading level, link to heading, and the title for each heading */
function getSectionList() {
    let nodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const sectionList = [];
    nodes = Array.from(nodes)
    const levelMap = {
        'h1': 0,
        'h2': 1,
        'h3': 2,
        'h4': 3,
        'h5': 4,
        'h6': 5,
    }
    for (let node of nodes) {
        if (node.id == '') {
            node.id = toID(node.innerText);
        }
        let level = levelMap[node.tagName.toLowerCase()];
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
    index.style.position = 'fixed';
    index.style.top = 0;
    index.style.right = 0;
    index.style.background = 'white';
    index.style.zIndex = 1;
    body.appendChild(index);
}

if (!check()) {
    const sectionList = getSectionList();
    createIndex(sectionList);
}
