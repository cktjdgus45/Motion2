import PageComponent from './page.js';

export default class ImageComponent {
    constructor(private title: string, private url: string) { };
    makeImageElement(): Element {
        const section = document.createElement('section');
        section.className = "main-item";
        const img = document.createElement('img');
        img.src = this.url;
        img.className = "main-item__image";
        img.alt = "random_image";
        const div = document.createElement('div');
        div.className = "main-item-content"
        const h3 = document.createElement('h3');
        h3.className = "main-item-title";
        h3.innerText = this.title;
        const button = document.createElement('button');
        button.className = "main-item-delBtn";
        button.innerText = 'x';
        button.addEventListener('click', (event: Event) => {
            new PageComponent().deleteComponent(section)
        })
        div.appendChild(h3);
        div.appendChild(button);
        section.appendChild(img);
        section.appendChild(div);
        return section;
    }
}