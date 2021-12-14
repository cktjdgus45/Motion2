import ImageComponent from './image.js';
import PageComponent from './page.js';
import VideoComponent from './video.js';

const headerBtns = document.querySelector('.header-btns');
const mediaForm = document.querySelector('.media-form');
const textForm = document.querySelector('.text-form');

const page = new PageComponent();

const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;
    text === "image" || text === "video" ? mediaForm?.classList.toggle('hide') :
        console.log('')
    text === "note" || text === "task" ? textForm?.classList.toggle('hide') :
        console.log('');
}

const handleMediaSubmit = (event: Event) => {
    event.preventDefault();
    const titleElement = mediaForm?.querySelector('.media-form-title') as HTMLInputElement;
    const urlElement = mediaForm?.querySelector('.media-form-url') as HTMLInputElement;
    const title = titleElement.value;
    const url = urlElement.value;
    const img = new ImageComponent(title, url);
    console.log(img.makeImageElement());
    page.attatchTo(img.makeImageElement());
    titleElement.value = "";
    urlElement.value = "";
    mediaForm?.classList.add('hide');
}
const handleTextSubmit = (event: Event) => {
    event.preventDefault();
    const title = textForm?.querySelector('.text-form-title') as HTMLInputElement;
    const body = textForm?.querySelector('.text-form-body') as HTMLInputElement;
    console.dir(title.value) //단순 제목.
    console.dir(body.value) //url 혹은 body
    title.value = "";
    body.value = "";
    textForm?.classList.add('hide');
}

headerBtns?.addEventListener('click', handleClick);
mediaForm?.addEventListener('submit', handleMediaSubmit);
textForm?.addEventListener('submit', handleTextSubmit);
