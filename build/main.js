"use strict";
const headerBtns = document.querySelector('.header-btns');
const mediaPopup = document.querySelector('.media-form');
const textPopup = document.querySelector('.text-form');
const handleClick = (event) => {
    const target = event.target;
    const text = target.innerText;
    console.log(text);
    text === "image" || text === "video" ? mediaPopup === null || mediaPopup === void 0 ? void 0 : mediaPopup.classList.toggle('hide') :
        text === "note" || text === "task" ? textPopup === null || textPopup === void 0 ? void 0 : textPopup.classList.toggle('hide') :
            console.log('');
};
headerBtns === null || headerBtns === void 0 ? void 0 : headerBtns.addEventListener('click', handleClick);
