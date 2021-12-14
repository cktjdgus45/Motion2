export default class ImageComponent {
    constructor(private title: string, private url: string) { };
    makeImageElement(): string {
        const img = document.createElement('img');
        img.src = this.url;
        img.className = "main-item-media__image";
        img.alt = "random_image";
        return img.outerHTML;
    }
}