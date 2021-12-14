export default class ImageComponent {
    constructor(private title: string, private url: string) { };
    makeImageElement(): string {
        const img = document.createElement('img');
        img.src = this.url;
        img.className = "main-item-media__image";
        img.alt = "random_image";
        console.log(img)
        console.dir(img)
        return img.outerHTML;
    }
}