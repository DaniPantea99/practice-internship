const template = document.createElement('template');
template.innerHTML = `
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
            display: flex;
            width: 500px;
            height: 300px;
            background-color: #1f2a48;
            border-radius: 10px;
            padding: 30px;
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
            margin-inline-end: 15px;
        }
        
        header {
            display: flex;
            justify-content: space-between;
        }

        .user-social-details {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            background-color: #141c2f;
            border-radius: 5px;
            padding: 20px;
            color: white;
            font-weight: bold;
        }

        .user-social-details div > :first-child {
            font-size: 10px;
            font-weight: normal;
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
            fill: white;
            margin-inline-end: 5px;
        }


    </style>

    <div class="user-card">
        <img />
        <div class="user-details">
            <header>
                <h3 class="user-name">The Octocat</h3>
                <p class="join-date">Joined 25 Jan 2011</p>
            </header>
            <p class="user-email">@octocat</p>
            <p class="user-bio">This profile has no bio</p>

            <div class="user-social-details">
                <div class="repos">
                <p>Repos<p>
                <p class="repos-score">8<p>
                </div>
                <div class="followers">
                <p>Followers<p>
                <p class="followers-score">3938<p>
                </div>
                <div class="following">
                <p>Following<p>
                <p class="following-score">9<p>
                </div>
            </div>

            <div class="card-footer">
                <div class="card-footer-details">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg></span>
                    <p>San Francisco</p>
                </div>

                <div class="card-footer-details">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg></span>
                    <p>Not Available</p>
                </div>

                <div class="card-footer-details">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></span>
                    <p><a href="">https</a></p>
                </div>

                <div class="card-footer-details">
                    <span class="icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg></span>
                    <p>@github</p>
                </div>

            </div>

        </div>
    </div>
`

class UserCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // this.shadowRoot.querySelector('h3').innerText = this.getAttribute('username');
        this.shadowRoot.querySelector('img').src = this.getAttribute('picture');



        // this.innerHTML = `
        // <h3>${this.getAttribute('username')}</h3>
        // <style>
        //     h3 {color: blue}            
        // </style>
        // `;
    }

    // connectedCallBack() {

    // }

}

window.customElements.define('user-card', UserCard);