export default class User extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  set data(value) {
    this.firstnameElem.textContent = value.firstname;
    this.lastnameElem.textContent = value.lastname;
    this.birthdateElem.textContent = value.birthdate;
  }

  // static get observedAttributes() {
  //   return ['firstname', 'lastname', 'birthdate'];
  // }

  //   attributeChangedCallback(property, oldVal, newVal) {
  //     console.log("###attributeChangedCallback");
  //         switch (property) {
  //         case 'firstname':
  //             this.firstnameElem.textContent = newVal || '';
  //             break;
  //         case 'lastname':
  //             this.lastnameElem.textContent = newVal || '';
  //             break;
  //         case 'birthdate':
  //             this.birthdateElem.textContent = newVal || '';
  //             break;
  //             }
  // }

  render() {
    this.shadowRoot.innerHTML = `
        <div class="user-details">
        <label for="firstname"><p>First Name</p>
        <input type="text" id="firstname" name="firstname">
        </label>
        <label for="lastname"><p>Last Name</p>
        <input type="text" id="lastname" name="lastname">
        </label>
        <label for="birthdate"><p>Birthdate</p>
        <input type="date" id="birthdate" name="birthdate">
        </label>
        <br>
        <input type="checkbox" id="agreement" name="agreement" checked disabled>
        <label for="agreement" style="display: inline-block"><p>I don't agree with the terms.</p></label>
        <button class="submit" style="display: block">Submit</button>
        </div>

        <div>
        <h2 id="firstname">First Name: <span></span></h2>
        
        <h2 id="lastname">Last Name: <span></span></h2>
        <p id="birthdate">Birthdate: <span></span></p>
        </div>
        `;

    this.firstnameElem = this.shadowRoot.querySelector("#firstname span");
    this.lastnameElem = this.shadowRoot.querySelector("#lastname span");
    this.birthdateElem = this.shadowRoot.querySelector("#birthdate span");
  }
}

customElements.define("user-details", User);

{
  const user = document.querySelector("user-details");

  user.data = {
    firstname: "looney",
    lastname: "tunes",
    birthdate: "1990",
  };

  //   setTimeout(() => {
  //     user.removeAttribute('firstname');
  //     user.removeAttribute('lastname');
  //     user.removeAttribute('birthdate');
  //     // user.title = "NEW TITLE"
  //   }, 2000);
}
