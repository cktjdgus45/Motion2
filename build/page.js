export default class PageComponent {
    constructor() {
        this.main = document.querySelector('.main');
    }
    ;
    attatchTo(element) {
        var _a;
        (_a = this.main) === null || _a === void 0 ? void 0 : _a.insertAdjacentElement('afterbegin', element);
    }
    deleteComponent(element) {
        element.remove();
    }
}
