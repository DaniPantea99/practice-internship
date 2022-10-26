export class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  get style() {
    return `
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .modal {   
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: grey;
                border-radius: 20px;
                font-family: sans-serif;
                font-size: 80%;
            }
            .modal-main {
                flex-grow: 1;
                overflow-y: auto;
                height: 0;
                padding: 0 20px 0px 20px;
            }
        * {
            scrollbar-width: thin;
            scrollbar-color: white grey;
          }
          
          
          *::-webkit-scrollbar {
            width: 10px;
          }
          
          *::-webkit-scrollbar-track {
            background: grey;
          }
          
          *::-webkit-scrollbar-thumb {
            background-color: white;
            border-radius: 20px;
            border: 3px solid grey;
          }

            .modal-header,
            .modal-footer {
                padding: 20px;
            }
        </style>
        `;
  }

  get template() {
    return `
        <div class="modal">
            <div class="modal-header"><slot name="modal-header"></slot></div>
            <div class="modal-main"><slot name="modal-main"></slot></div>
            <div class="modal-footer"><slot name="modal-footer"></slot></div>
        </div>
        `;
  }

  render() {
    this.shadowRoot.innerHTML = `${this.style}${this.template}`;
  }
}

customElements.define("modal-form", Modal);
