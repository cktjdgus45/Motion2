"use strict";
const headerBtns = document.querySelector('.header-btns');
const mediaForm = document.querySelector('.media-form');
const textForm = document.querySelector('.text-form');
const handleClick = (event) => {
    const target = event.target;
    const text = target.innerText;
    console.log(text);
    text === "image" || text === "video" ? mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.toggle('hide') :
        console.log('');
    text === "note" || text === "task" ? textForm === null || textForm === void 0 ? void 0 : textForm.classList.toggle('hide') :
        console.log('');
};
const handleMediaSubmit = (event) => {
    event.preventDefault();
    const title = mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.querySelector('.media-form-title');
    const url = mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.querySelector('.media-form-url');
    console.dir(title.value);
    console.dir(url.value);
    title.value = "";
    url.value = "";
    mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.classList.add('hide');
};
const handleTextSubmit = (event) => {
    event.preventDefault();
    const title = textForm === null || textForm === void 0 ? void 0 : textForm.querySelector('.text-form-title');
    const body = textForm === null || textForm === void 0 ? void 0 : textForm.querySelector('.text-form-body');
    console.dir(title.value);
    console.dir(body.value);
    title.value = "";
    body.value = "";
    textForm === null || textForm === void 0 ? void 0 : textForm.classList.add('hide');
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener('click', handleClick);
mediaForm === null || mediaForm === void 0 ? void 0 : mediaForm.addEventListener('submit', handleMediaSubmit);
textForm === null || textForm === void 0 ? void 0 : textForm.addEventListener('submit', handleTextSubmit);
