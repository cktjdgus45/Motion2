import ImageComponent from './image.js';
import NoteComponent from './note.js';
import PageComponent from './page.js';
import TaskComponent from './task.js';
import VideoComponent from './video.js';
const headerBtns = document.querySelector('.header-btns');
const mediaForm = document.querySelector('.media-form');
const mediaAdd = mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.querySelector('input[type="submit"]');
const textForm = document.querySelector('.text-form');
const textAdd = textForm === null || textForm === void 0 ? void 0 : textForm.querySelector('input[type="submit"]');
const closeBtn = document === null || document === void 0 ? void 0 : document.querySelectorAll('.closeBtn');
const page = new PageComponent();
const handleClick = (event) => {
    const target = event.target;
    const text = target.innerText;
    switch (text) {
        case "image":
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.toggle('hide');
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.add('image');
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.remove('video');
            break;
        case "video":
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.toggle('hide');
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.add('video');
            mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.remove('image');
            break;
        case "note":
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.toggle('hide');
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.add('note');
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.remove('task');
            break;
        case "task":
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.toggle('hide');
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.add('task');
            textForm === null || textForm === void 0 ? void 0 : textForm.classList.remove('note');
            break;
        default:
            break;
    }
};
const handleMediaSubmit = (event) => {
    event.preventDefault();
    const kind = event.target;
    const item = kind.classList.item(1);
    const titleElement = mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.querySelector('.media-form-title');
    const urlElement = mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.querySelector('.media-form-url');
    const title = titleElement.value;
    const url = urlElement.value;
    if (item === "image") {
        const img = new ImageComponent(title, url);
        page.attatchTo(img.makeImageElement());
    }
    else if (item === "video") {
        const video = new VideoComponent(title, url);
        page.attatchTo(video.makeVideoElement());
    }
    titleElement.value = "";
    urlElement.value = "";
    mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.add('hide');
};
const handleTextSubmit = (event) => {
    event.preventDefault();
    const kind = event.target;
    const item = kind.classList.item(1);
    const titleElement = textForm === null || textForm === void 0 ? void 0 : textForm.querySelector('.text-form-title');
    const urlElement = textForm === null || textForm === void 0 ? void 0 : textForm.querySelector('.text-form-body');
    const title = titleElement.value;
    const body = urlElement.value;
    if (item === "task") {
        const task = new TaskComponent(title, body);
        page.attatchTo(task.makeTaskElement());
    }
    else if (item === "note") {
        const note = new NoteComponent(title, body);
        page.attatchTo(note.makeNoteElement());
    }
    titleElement.value = "";
    urlElement.value = "";
    textForm === null || textForm === void 0 ? void 0 : textForm.classList.add('hide');
};
const handleClose = (event) => {
    event.preventDefault();
    mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.add('hide');
    textForm === null || textForm === void 0 ? void 0 : textForm.classList.add('hide');
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener('click', handleClick);
mediaAdd === null || mediaAdd === void 0 ? void 0 : mediaAdd.addEventListener('click', handleMediaSubmit);
textAdd === null || textAdd === void 0 ? void 0 : textAdd.addEventListener('click', handleTextSubmit);
closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.forEach(btn => btn.addEventListener('click', handleClose));
