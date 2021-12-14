export default class ImageComponent {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
    ;
    makeImageElement() {
        const img = document.createElement('img');
        img.src = this.url;
        img.className = "main-item-media__image";
        img.alt = "random_image";
        return img.outerHTML;
    }
}
