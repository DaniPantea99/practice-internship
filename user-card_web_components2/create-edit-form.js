export class CreateEdit extends HTMLElement {
  #show = false;
  #user = null;

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

  set user(value) {
    this.#user = value;
    this.initForm();
  }

  get style() {
    return `
      <style>
      :host {
        display: ${this.#show ? "block" : "none"};
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translate(-50%, 0%);
        height: 100%;
        max-height: 650px;
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
          margin-bottom: 10px;
          border: none;
          padding: 7px;
          outline: none;
          border-radius: 5px;
      }

      input::placeholder {
          color: grey;
      }

      *:required {
        background-color: pink;
      }

      *:required::placeholder {
        color:red;
      }

      *:required:valid {
        background-color: lightgreen;
        color: darkgreen;
        font-weight: bold;
      }

      label {
          display: block;
          flex-direction: column;
          padding-bottom: 7px;

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
          margin-bottom: 10px;

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
          align-items: center;
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

      .req {
        color: red;
      }

    //   button[disabled],
    //   button[disabled]:hover {
    //     background-color: black;
    //     color: white;
    //     cursor: not-allowed;
    //   }



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
          <label for="picture">Add picture url:</label>
              <input type="text" name="picture" id="picture"
                  placeholder="https://randomuser.me/api/portraits/lego/1.jpg" value="https://randomuser.me/api/portraits/men/1.jpg"></input>
          
          <label for="username">Name:<span class="req">*</span></label>
              <input type="text" name="username" id="username" placeholder="New username" required></input>
          
          <label for="email">Email address:</label>
              <input type="text" name="email" id="email" placeholder="@email"></input>
          
          <label for="bio">Biography:</label>
              <textarea rows="3" cols="30" name="bio" id="bio" placeholder="User biography"></textarea>
          
          <label for="city">City:</label>
              <input type="text" name="city" id="city" placeholder="City name"></input>
          
          <label for="link">HTTP address:</label>
              <input type="text" name="link" id="link" placeholder="URL address"></input>
          
          <label for="socialaccount">Twitter address:</label>
              <input type="text" name="socialaccount" id="socialaccount" placeholder="Twitter address"></input>
          
          <label for="homepage">Homepage address:</label>
              <input type="text" name="homepage" id="homepage" placeholder="Homepage address"></input>
          
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
      if (this.#user.id) {
        addBtn.dispatchEvent(
          new CustomEvent('add', {
            detail: {
              user: {
                id: this.#user.id,
                picture: this.shadowRoot.querySelector('#picture').value,
                username: this.shadowRoot.querySelector('#username').value,
                // joindate: today,
                email: this.shadowRoot.querySelector('#email').value,
                bio: this.shadowRoot.querySelector('#bio').value,
                // repos: '',
                // followers: '',
                // following: '',
                city: this.shadowRoot.querySelector('#city').value,
                link: this.shadowRoot.querySelector('#link').value,
                socialaccount:
                  this.shadowRoot.querySelector('#socialaccount').value,
                homepage: this.shadowRoot.querySelector('#homepage').value,
              },
            },
            bubbles: true,
            composed: true,
          })
        );
      } else {
        let newDate = new Date();
        let month = newDate.toLocaleString('default', { month: 'short' });
        let today = `${newDate.getDate()} ${month} ${newDate.getFullYear()}`;
        addBtn.dispatchEvent(
          new CustomEvent('add', {
            detail: {
              user: {
                id: this.#user.id,
                picture: this.shadowRoot.querySelector('#picture').value,
                username: this.shadowRoot.querySelector('#username').value,
                joindate: today,
                email: this.shadowRoot.querySelector('#email').value,
                bio: this.shadowRoot.querySelector('#bio').value,
                repos: '',
                followers: '',
                following: '',
                city: this.shadowRoot.querySelector('#city').value,
                link: this.shadowRoot.querySelector('#link').value,
                socialaccount:
                  this.shadowRoot.querySelector('#socialaccount').value,
                homepage: this.shadowRoot.querySelector('#homepage').value,
              },
            },
            bubbles: true,
            composed: true,
          })
        );
      }
      this.show = false;
    });
    
  }

  initForm() {
    this.shadowRoot.querySelector('.add-btn').innerText = 'Update';
    this.shadowRoot.querySelector('#picture').value = this.#user?.picture??'';
    this.shadowRoot.querySelector('#username').value = this.#user?.username??'';
    this.shadowRoot.querySelector('#email').value = this.#user?.email??'';
    this.shadowRoot.querySelector('#bio').value = this.#user?.bio??'';
    this.shadowRoot.querySelector('#city').value = this.#user?.city??'';
    this.shadowRoot.querySelector('#link').value = this.#user?.link??'';
    this.shadowRoot.querySelector('#socialaccount').value = this.#user?.socialaccount??'';
    this.shadowRoot.querySelector('#homepage').value = this.#user?.homepage??'';
  }
}

customElements.define("create-edit", CreateEdit);
