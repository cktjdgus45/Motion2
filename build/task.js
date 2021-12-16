import PageComponent from './page.js';
export default class TaskComponent {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    ;
    makeTaskElement() {
        const section = document.createElement('section');
        section.className = "main-item";
        const div = document.createElement('div');
        div.className = "main-item__task";
        const title = document.createElement('h3');
        const content = document.createElement('h3');
        title.className = "main-item__task-title";
        content.className = "main-item__task-content";
        title.innerText = this.title;
        content.innerText = this.body;
        const button = document.createElement('button');
        button.className = "main-item-delBtn";
        button.innerText = 'x';
        button.addEventListener('click', (event) => {
            new PageComponent().deleteComponent(section);
        });
        div.appendChild(title);
        div.appendChild(content);
        section.appendChild(div);
        section.appendChild(button);
        return section;
    }
}
