import ImageComponent from './image.js';
import NoteComponent from './note.js';
import PageComponent from './page.js';
import TaskComponent from './task.js';
import VideoComponent from './video.js';

const headerBtns = document.querySelector('.header-btns');
const mediaForm = document.querySelector('.media-form');
const mediaAdd = mediaForm?.querySelector('input[type="submit"]')
const textForm = document.querySelector('.text-form');
const textAdd = textForm?.querySelector('input[type="submit"]')
const closeBtn = document?.querySelectorAll('.closeBtn');

const page = new PageComponent();


const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;

    switch (text) {
        case "image":
            mediaForm?.classList.toggle('hide');
            mediaForm?.classList.add('image');
            mediaForm?.classList.remove('video');
            break;
        case "video":
            mediaForm?.classList.toggle('hide');
            mediaForm?.classList.add('video');
            mediaForm?.classList.remove('image');
            break;
        case "note":
            textForm?.classList.toggle('hide');
            textForm?.classList.add('note');
            textForm?.classList.remove('task');
            break;
        case "task":
            textForm?.classList.toggle('hide');
            textForm?.classList.add('task');
            textForm?.classList.remove('note');
            break;
        default:
            break;
    }
}

const handleMediaSubmit = (event: Event) => {
    event.preventDefault();
    const kind = event.target as HTMLElement;
    const item = kind.parentElement?.classList.item(1);
    const titleElement = mediaForm?.querySelector('.media-form-title') as HTMLInputElement;
    const urlElement = mediaForm?.querySelector('.media-form-url') as HTMLInputElement;
    const title = titleElement.value;
    const url = urlElement.value;

    if (item === "image") {
        const img = new ImageComponent(title, url);
        page.attatchTo(img.makeImageElement());
    } else if (item === "video") {
        const video = new VideoComponent(title, url);
        page.attatchTo(video.makeVideoElement());
    }
    titleElement.value = "";
    urlElement.value = "";
    mediaForm?.classList.add('hide');
}
const handleTextSubmit = (event: Event) => {
    event.preventDefault();
    const kind = event.target as HTMLElement;
    const item = kind.parentElement?.classList.item(1);
    const titleElement = textForm?.querySelector('.text-form-title') as HTMLInputElement;
    const urlElement = textForm?.querySelector('.text-form-body') as HTMLInputElement;
    const title = titleElement.value;
    const body = urlElement.value;
    if (item === "task") {
        const task = new TaskComponent(title, body);
        page.attatchTo(task.makeTaskElement());
    } else if (item === "note") {
        const note = new NoteComponent(title, body);
        page.attatchTo(note.makeNoteElement());
    }
    titleElement.value = "";
    urlElement.value = "";
    textForm?.classList.add('hide');
}

const handleClose = (event: Event) => {
    event.preventDefault();
    mediaForm?.classList.add('hide');
    textForm?.classList.add('hide');
}

headerBtns?.addEventListener('click', handleClick);
mediaAdd?.addEventListener('click', handleMediaSubmit);
textAdd?.addEventListener('click', handleTextSubmit);
closeBtn?.forEach(btn => btn.addEventListener('click', handleClose));
