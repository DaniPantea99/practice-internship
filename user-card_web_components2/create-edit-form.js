export class CreateEdit extends HTMLElement {
  #show = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set show(value) {
    this.#show = value;
    this.render();
  }

  get style() {
    return `
      <style>
      :host {
        display: ${this.#show ? "block" : "none"};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 100%;
        max-height: 80%;
        min-height: 400px;
        width: 100%;
        max-width: 400px;
        min-width: 200px;
      }
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      input {
          width: 100%;
          margin-bottom: 6px;
          border: none;
          padding: 7px;
          outline: none;
          border-radius: 5px;
      }

      input::placeholder {
          color: grey;
      }

      label {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
      }

      textarea {
          border-radius: 5px;
          padding: 7px;
          border: none;
          outline: none;
          width: 100%;
          max-width: 350px;
          min-width: 200px;
          min-height: 70px;
      }

      .modal {
          max-width: 400px;
          min-width: 300px;
          background-color: grey;
          padding: 30px;
          border-radius: 20px;
          font-family: sans-serif;
          font-size: 80%;
      }

      .modal-header {
          display: flex;
          justify-content: space-between;

      }

      .close-btn {
          background-color: black;
          color: white;
          border: none;
          padding: 10px;
          border-radius: 5px 10px 5px 10px;
          cursor: pointer;
      }

      .close-btn:hover {
          background-color: red;
      }

      .form-buttons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
      }

      .form-buttons button {
          padding: 10px;
          border: none;
          color: black;
          border-radius: 10px;
          width: 100%;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
      }

      .cancel-btn {
          background-color: lightblue;
      }

      .add-btn {
          background-color: lightblue;
      }

      .cancel-btn:hover {
          background-color: pink;
      }

      .add-btn:hover {
          background-color: lightgreen;
      }

      
  </style>
          `;
  }

  get template() {
    return `
      <modal-form>
      <div slot="modal-header" class="modal-header">
          <h3 class="modal-title">Add new user card</h3>
          <button class="close-btn">X</button>
      </div>

      <div slot="modal-main">
          <label for="picture">Add picture url:
              <input type="text" name="picture" id="picture"
                  placeholder="https://randomuser.me/api/portraits/lego/1.jpg"></input>
          </label>

          <label for="username">Name:
              <input type="text" name="username" id="username" placeholder="New username"></input>
          </label>

          <label for="email">Email address:
              <input type="text" name="email" id="email" placeholder="@email"></input>
          </label>

          <label for="bio">Biography:
              <textarea rows="3" cols="30" name="bio" id="bio" placeholder="User biography"></textarea>
          </label>

          <label for="city">City:
              <input type="text" name="city" id="city" placeholder="City name"></input>
          </label>


          <label for="link">HTTP address:
              <input type="text" name="link" id="link" placeholder="URL address"></input>
          </label>

          <label for="socialaccount">Twitter address:
              <input type="text" name="socialaccount" id="socialaccount" placeholder="Twitter address"></input>
          </label>

          <label for="homepage">Homepage address:
              <input type="text" name="homepage" id="homepage" placeholder="Homepage address"></input>
          </label>
      </div>

      <div slot="modal-footer" class="form-buttons">
          <button class="cancel-btn">Cancel</button>
          <button class="add-btn">Add</button>
      </div>
  </modal-form>
          `;
  }

  render() {
    this.shadowRoot.innerHTML = `${this.style}${this.template}`;

    const closeBtn = this.shadowRoot.querySelector(".close-btn");
    const cancelBtn = this.shadowRoot.querySelector(".cancel-btn");
    const addBtn = this.shadowRoot.querySelector('.add-btn');

    closeBtn.addEventListener("click", () => {
      this.show = false;
    });
    cancelBtn.addEventListener("click", () => {
      this.show = false;
    });

    addBtn.addEventListener('click', () => {
        userCardsElement.users.push("{}")
    })



  }
}

customElements.define("create-edit", CreateEdit);
