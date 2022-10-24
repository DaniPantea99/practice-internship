export class UserCardList extends HTMLElement {
    #userCards = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    set users(value) {
        this.#userCards = value;
        this.render();
    }

    render() {
        this.shadow.innerHTML = `
        <div class="users">
        ${this.#userCards.map(user => `
            <user-card
                picture="${user.picture}"
                username="${user.username}"
                joindate="${user.joindate}"
                email="${user.email}
                >
                </user-card>
                `).join('\n')}
        </div>`
    }
}

customElements.define('user-card-list', UserCardList);