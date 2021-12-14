export default class TaskComponent {
    constructor(private title: string, private body: string) { };
    makeTaskElement(): HTMLElement {
        const title = document.createElement('string');
        const content = document.createElement('string');
        title.className = "main-item-title";
        content.className = "main-item-content";
        title.innerText = this.title;
        content.innerText = this.body;
        return content;
    }
}