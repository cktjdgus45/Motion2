export default class TaskComponent {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
    ;
    makeTaskElement() {
        const title = document.createElement('string');
        const content = document.createElement('string');
        title.className = "main-item-title";
        content.className = "main-item-content";
        title.innerText = this.title;
        content.innerText = this.body;
        return content;
    }
}
