export class Modal extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    get template() {
        return `
        <div class="modal">
        <div class="modal-header">
        <h3 class="modal-title">Add new user card</h3>
        <button class="close-modal">X</button>
        </div>
        
        <label for="picture">Add picture url:
        <input type="text" name="picture" id="picture"></input>
        </label>
        
        <br>
        <label for="username">Name:
        <input type="text"></input>
        </label>
        
        </div>

        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }

}

customElements.define('modal-form', Modal);