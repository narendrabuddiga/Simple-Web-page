import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome , Dom</h1>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
            <p>
                Type the mobile number and text below to send sms
            </p>
            
                <input id="phone" name="phone" type="tel" placeholder="1234567890" >
                <input id="message" type="message" placeholder="message">
                <input id="sendMsgbutton" type="button" value="Send Message"/>
        `;
    }


}