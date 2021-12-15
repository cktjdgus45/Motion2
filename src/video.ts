export default class VideoComponent {
    constructor(private title: string, private url: string) { };
    makeVideoElement(): string {
        const section = document.createElement('section');
        section.className = "main-item";
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        iframe.id = "ytplayer";
        iframe.className = "main-item__video";
        iframe.allowFullscreen = true;
        const div = document.createElement('div');
        div.className = "main-item-content"
        const h3 = document.createElement('h3');
        h3.className = "main-item-title";
        h3.innerText = this.title;
        const button = document.createElement('button');
        button.className = "main-item-delBtn";
        button.innerText = 'x';
        div.appendChild(h3);
        div.appendChild(button);
        section.appendChild(iframe);
        section.appendChild(div);
        return section.outerHTML;
    }
}