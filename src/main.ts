const headerBtns = document.querySelector('.header-btns');
const mediaForm = document.querySelector('.media-form');
const textForm = document.querySelector('.text-form');

const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;
    console.log(text);
    text === "image" || text === "video" ? mediaForm?.classList.toggle('hide') :
        console.log('')
    text === "note" || text === "task" ? textForm?.classList.toggle('hide') :
        console.log('');
}

const handleMediaSubmit = (event: Event) => {
    event.preventDefault();
    const title = mediaForm?.querySelector('.media-form-title') as HTMLInputElement;
    const url = mediaForm?.querySelector('.media-form-url') as HTMLInputElement;
    console.dir(title.value)
    console.dir(url.value)
    title.value = "";
    url.value = "";
    mediaForm?.classList.add('hide');
}
const handleTextSubmit = (event: Event) => {
    event.preventDefault();
    const title = textForm?.querySelector('.text-form-title') as HTMLInputElement;
    const body = textForm?.querySelector('.text-form-body') as HTMLInputElement;
    console.dir(title.value)
    console.dir(body.value)
    title.value = "";
    body.value = "";
    textForm?.classList.add('hide');
}

headerBtns?.addEventListener('click', handleClick);
mediaForm?.addEventListener('submit', handleMediaSubmit);
textForm?.addEventListener('submit', handleTextSubmit);
