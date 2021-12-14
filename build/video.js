export default class VideoComponent {
    constructor(title, url) {
        this.title = title;
        this.url = url;
    }
    ;
    makeVideoElement() {
        const iframe = document.createElement('iframe');
        iframe.src = this.url;
        iframe.id = "ytplayer";
        iframe.className = "main-item-media__video";
        iframe.width = "720";
        iframe.height = "405";
        iframe.allowFullscreen = true;
        return iframe.outerHTML;
    }
}
