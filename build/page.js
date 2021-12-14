export default class PageComponent {
    constructor() { }
    ;
    attatchTo(element) {
        const main = document.querySelector('.main');
        main === null || main === void 0 ? void 0 : main.insertAdjacentHTML('afterbegin', element);
    }
}
