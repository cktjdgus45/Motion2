const headerBtns = document.querySelector('.header-btns');
const mediaPopup = document.querySelector('.media-form');
const textPopup = document.querySelector('.text-form');

const handleClick = (event: Event) => {
    const target = event.target as HTMLElement;
    const text = target.innerText;
    console.log(text);
    text === "image" || text === "video" ? mediaPopup?.classList.toggle('hide') :
        text === "note" || text === "task" ? textPopup?.classList.toggle('hide') :
            console.log('');
}
headerBtns?.addEventListener('click', handleClick);
