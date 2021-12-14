export default class NoteComponent {
    constructor(private title: string, private body: string) { };
    makeNoteElement(): HTMLElement {
        const title = document.createElement('string');
        const content = document.createElement('string');
        title.className = "main-item-title";
        content.className = "main-item-content";
        title.innerText = this.title;
        content.innerText = this.body;
        return content;
    }
}