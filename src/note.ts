export default class NoteComponent {
    constructor(private title: string, private body: string) { };
    makeNoteElement(): string {
        const section = document.createElement('section');
        section.className = "main-item";
        const div = document.createElement('div');
        div.className = "main-item__note";
        const title = document.createElement('h3');
        const content = document.createElement('h3');
        title.className = "main-item__note-title";
        content.className = "main-item__note-content";
        title.innerText = this.title;
        content.innerText = this.body;
        const button = document.createElement('button');
        button.className = "main-item-delBtn";
        button.innerText = 'x';
        div.appendChild(title);
        div.appendChild(content);
        section.appendChild(div);
        section.appendChild(button);
        return section.outerHTML;
    }
}