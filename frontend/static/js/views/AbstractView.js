export default class {
    constructor(params, body) {
        this.params = params;
        this.body = body
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return "";
    }
}