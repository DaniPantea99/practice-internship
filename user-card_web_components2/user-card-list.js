export class UserCardList extends HTMLElement {
    #usersCards = [];
    
    constructor() {
      super();
      
      this.attachShadow({mode: 'open'});
    }
    
    set users(value) {
      this.#usersCards = value;
      this.display();
    }



    get template() {
      return `
              ${this.#usersCards.map(user => `
                <user-card
                  picture="${user.picture}"
                  username="${user.username}"
                  joindate="${user.joindate}"
                  email="${user.email}"
                  bio="${user.bio}"
                  repos="${user.repos}"
                  followers="${user.followers}"
                  following="${user.following}"
                  city="${user.city}"
                  link="${user.link}"
                  socialaccount="${user.socialaccount}"
                  homepage="${user.homepage}"
                  >
                </user-card>
              `).join('')}
            `
    }

    display() {
      this.shadowRoot.innerHTML = this.template   
    }
  }
  
  customElements.define('user-card-list', UserCardList);