export default class PageComponent {
    private main: Element | null = document.querySelector('.main');
    constructor() { };
    attatchTo(element: Element): void {
        // <div id="one">one</div>
        this.main?.insertAdjacentElement('afterbegin', element);
        // main?.insertAdjacentHTML('afterend', '<div id="two">two</div>');
        // At this point, the new structure is:
        // <div id="one">one</div><div id="two">two</div>
    }
    deleteComponent(element: Element) {
        element.remove();
    }
}