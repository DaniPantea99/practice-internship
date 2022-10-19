export default class User extends HTMLElement {
    firstname = "";
    lastname = "";
    birthdate = "";
  constructor() {
    super();

    
    // const shadowRoot = this.attachShadow({mode: 'closed'});
    this.attachShadow({
      mode: "open",
      // delegatesFocus: true
    });
    this.render();

  }

//   connectedCallback() {
//     console.log("###connectedCallback");
//     this.render();
//   }

  static get observedAttributes() {
    return ['firstname', 'lastname', 'birthdate'];
  }

  attributeChangedCallback(property, oldVal, newVal) {
    // console.log('---attributeChangedCallback:', property, '\n---Old value:', oldVal, '\n---New value:', newVal, '\n this.hasAttribute(property)', this.hasAttribute(property));
    console.log("###attributeChangedCallback");
    // switch (property) {
    //     case 'firstname':
    //         this.firstname = newVal;
    //         console.log('---attributeChangedCallback:', property, '\n---Old value:', oldVal, '\n---New value:', newVal, '\n this.hasAttribute(property)', this.hasAttribute(property));
    //         break;
    //     case 'lastname':
    //         this.lastname = newVal;
    //         console.log('---attributeChangedCallback:', property, '\n---Old value:', oldVal, '\n---New value:', newVal, '\n this.hasAttribute(property)', this.hasAttribute(property));
    //         break;
    //     case 'birthdate':
    //         this.birthdate = newVal;
    //         console.log('---attributeChangedCallback:', property, '\n---Old value:', oldVal, '\n---New value:', newVal, '\n this.hasAttribute(property)', this.hasAttribute(property));
    //         break;        
    //         }
    // this.render();

        switch (property) {
        case 'firstname':
            this.firstnameElem.textContent = newVal || '';
            break;
        case 'lastname':
            this.lastnameElem.textContent = newVal || '';
            break;
        case 'birthdate':
            this.birthdateElem.textContent = newVal || '';
            break;        
            }

}

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
        <h2 id="firstname">First Name: <span>${this.firstname}</span></h2>
        
        <h2 id="lastname">Last Name: <span>${this.lastname}</span></h2>
        <p id="birthdate">Birthdate: <span>${this.birthdate}</span></p>
        </div>
        `;
  
    this.firstnameElem = this.shadowRoot.querySelector('#firstname span');
    this.lastnameElem = this.shadowRoot.querySelector('#lastname span');
    this.birthdateElem = this.shadowRoot.querySelector('#birthdate span');


    }
}

customElements.define("user-details", User);

// {
//   const user = document.querySelector("user-details");
//   setTimeout(() => {
//     user.removeAttribute('firstname');
//     user.removeAttribute('lastname');
//     user.removeAttribute('birthdate');
//     // user.title = "NEW TITLE"
//   }, 2000);
// }