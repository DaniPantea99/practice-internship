import { userCardsElement } from './app.js';

export class UserCard extends HTMLElement {
    id = null;
  picture = 'https://randomuser.me/api/portraits/lego/1.jpg';
  username = 'Name not defined';
  joindate = 'unknown';
  email = '@not-available';
  bio = 'This profile has no bio';
  repos = '0';
  followers = '0';
  following = '0';
  city = 'Not Available';
  link = 'Not Available';
  socialaccount = 'Not Available';
  homepage = 'Not Available';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return [
        'id',
      'picture',
      'username',
      'joindate',
      'email',
      'bio',
      'repos',
      'followers',
      'following',
      'city',
      'link',
      'socialaccount',
      'homepage',
    ];
  }

  connectedCallback() {
    this.render();
    this.userCardActions();
  }

  attributeChangedCallback(property, oldValue, newValue) {
    if (this.isConnected) {
      this[property] = this.isNull(newValue) ? this[property] : newValue;
    //   console.log(property)
      this.render();
    }
  }

  isNull(value) {
    return value === 'undefined' || !value;
  }

  get style() {
    return `
      <style>
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      a {
          text-decoration: none;
          color: white;
      }
      .user-card {
        position: relative;
          display: flex;
          width: 550px;
          min-height: 300px;
          background-color: #1f2a48;
          border-radius: 10px;
          padding: 25px;
          margin-block: 10px;
          margin-inline: 10px;
          color: white;
          font-family: sans-serif;
      }
      .user-details {
          width: 100%
      }
      img {
          height: 100px;
          border-radius: 50%;
          margin-inline-end: 30px;
      }
      header {
          display: flex;
          justify-content: space-between;
          margin-block: 10px;
      }
      header p {
          font-size: 14px;
          color: #D5D5D5;
          align-self: end;
      }
      .user-social-details {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background-color: #141c2f;
          border-radius: 5px;
          padding: 10px 20px;
          color: white;
          font-weight: bold;
          margin-block-end: 20px;
      }
      .user-social-details div > :first-child {
          font-size: 12px;
          font-weight: normal;
          letter-spacing: 1px;
          color: #D5D5D5;
          margin-bottom: 2px;
      }
      .card-footer {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          row-gap: 10px;
      }
      .card-footer-details p {
          display: inline-block;
          font-size: 14px;
      }
      .icon svg {
          height: 15px;
          width: 15px;
          fill: white;
          margin-inline-end: 10px;
      }
      .user-email {
          margin-block-end: 15px;
          color: #0079fe;
      }
      .user-bio {
          margin-block-end: 15px;
          height: 80px;
          overflow: auto;
          padding-right: 6px;
      }
      * {
      scrollbar-width: thin;
      scrollbar-color: white grey;
    }
    
    
    *::-webkit-scrollbar {
      width: 3px;
    }
    
    *::-webkit-scrollbar-track {
      background: #222a47;
    }
    
    *::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 20px;
      border: 3px solid #3222a47;
    }

    .menu-nav {
        position: absolute;
        display: flex;
        gap: 20px;
        right: 0;
        top: 0;
        transform: translate(-30px, 10px)
    }

    .menu-nav span svg {
        fill: white;
        height: 20px;
        width: 20px;
        cursor: pointer;
    }
    .menu-nav span:first-child svg:hover {
        fill: #6DE6F8;
    }
    .menu-nav span:last-child svg:hover {
        fill: pink;
    }

  </style>
        `;
  }

  get template() {
    return `    
  <div class="user-card">
    <div class="menu-nav">
    <span class="edit-user-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H322.8c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7l40.3-40.3c-32.1-31-75.7-50.1-123.9-50.1H178.3zm435.5-68.3c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L576.1 358.7l-71-71L375.9 417z"/></svg></span>
    <span class="delete-user-btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 128c0 70.7-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM472 200H616c13.3 0 24 10.7 24 24s-10.7 24-24 24H472c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    </span>
    </div>
      <img src="${this.picture}"/>
      <div class="user-details">
          <header>
              <h3 class="user-name">${this.username}</h3>
              <p>Joined <span class="join-date">${this.joindate}</span></p>
          </header>
          <p class="user-email">${this.email}</p>
          <p class="user-bio">${this.bio}</p>

          <div class="user-social-details">
              <div class="repos">
              <p>Repos<p>
              <p class="repos-score">${this.repos}<p>
              </div>
              <div class="followers">
              <p>Followers<p>
              <p class="followers-score">${this.followers}<p>
              </div>
              <div class="following">
              <p>Following<p>
              <p class="following-score">${this.following}<p>
              </div>
          </div>

          <div class="card-footer">
              <div class="card-footer-details">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg></span>
                  <p class="user-city">${this.city}</p>
              </div>

              <div class="card-footer-details">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></span>
                  <p class="user-social-account">${this.socialaccount}</p>
              </div>

              <div class="card-footer-details">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></span>
                  <p><a href="" class="user-link">${this.link}</a></p>
              </div>

              <div class="card-footer-details">
                  <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg></span>
                  <p class="home-page">${this.homepage}</p>
              </div>
          </div>
      </div>
  </div>
        `;
  }

  render() {
    this.shadowRoot.innerHTML = `${this.style}${this.template}`;
  }

  userCardActions() {
    const removeUserBtn = this.shadowRoot.querySelector('.delete-user-btn');
    const editUserBtn = this.shadowRoot.querySelector('.edit-user-btn');

    removeUserBtn.addEventListener('click', removeUser.bind(this));
    editUserBtn.addEventListener('click', editUser);

    function removeUser() {
        removeUserBtn.dispatchEvent(new CustomEvent("remove", {
            detail: {
            id: this.id
        },
        composed: true
        }))
    }

    function editUser() {
        editUserBtn.dispatchEvent(new CustomEvent("edit", {
            detail: {
            id: this.id
        },
        composed: true
        }))
    }
  }
}

customElements.define('user-card', UserCard);
