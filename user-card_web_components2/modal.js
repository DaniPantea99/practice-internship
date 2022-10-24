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
        <input type="text" name="picture" id="picture" placeholder="https://randomuser.me/api/portraits/lego/1.jpg"></input>
        </label>
        
        <br>
        <label for="username">Name:
        <input type="text" name="username" id="username" placeholder="New username"></input>
        </label>

        <br>
        <label for="email">Email address:
        <input type="text" name="email" id="email" placeholder="@email"></input>
        </label>

        <br>
        <label for="bio">Biography:
        <textarea rows="3" cols="30" name="bio" id="bio" placeholder="User biography"></textarea>
        </label>

        <br>
        <label for="city">City:
        <input type="text" name="city" id="city" placeholder="City name"></input>
        </label>

        <br>
        <label for="link">HTTP address:
        <input type="text" name="link" id="link" placeholder="URL address"></input>
        </label>
        
        </div>

        `
    }

    render() {
        this.shadowRoot.innerHTML = this.template;
    }

}

customElements.define('modal-form', Modal);