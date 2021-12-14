export default class PageComponent {
    constructor() { };
    attatchTo(element: string): void {
        // <div id="one">one</div>
        const main = document.querySelector('.main');
        main?.insertAdjacentHTML('afterbegin', element);
        // main?.insertAdjacentHTML('afterend', '<div id="two">two</div>');
        // At this point, the new structure is:
        // <div id="one">one</div><div id="two">two</div>
    }
}