


class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const template = document.querySelector('#user-details');
        const node = document.importNode(template.content, true);
        this.shadowRoot.appendChild(node);
    }
    
}

customElements.define('user-card', UserCard);
