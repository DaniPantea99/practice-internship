import {template} from './card-template.mjs'
// import {UserCardList} from './user-card-list.mjs';

const arr = ['john', 'bob'];

arr[0] = {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John",
        joindate: "25 Jan 2011",
        email: "@johnny",
        bio: "This profile has no bio",
        repos: "8",
        followers: "3938",
        following: "9",
        city: "San Francisco",
        link: "https://github.blog",
        socialaccount: "Not Available",
        homepage: "@github"
}

arr[1] = {
    picture: "https://randomuser.me/api/portraits/men/2.jpg",
    username: "Bob",
    joindate: "24 Jan 2011",
    email: "@bob0bob",
    bio: "This profile has no bio",
    repos: "8",
    followers: "3938",
    following: "9",
    city: "Los Angeles",
    link: "https://github.blog",
    socialaccount: "Not Available",
    homepage: "@github"
}

class UserCard extends HTMLElement {
    picture = "https://randomuser.me/api/portraits/lego/1.jpg";
    username = "Name not defined";
    joindate = "unknown";
    email = "@not-available";
    bio = "This profile has no bio";
    repos = "0";
    followers = "0";
    following = "0";
    city = "Not Available";
    link = "Not Available";
    socialaccount = "Not Available"; 
    homepage = "Not Available"; 

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        // Select elements and assign values
        this.shadowRoot.querySelector('img').src = this.getAttribute('picture') || this.picture;
        this.shadowRoot.querySelector('.user-name').innerText = this.getAttribute('username') || this.username;
        this.shadowRoot.querySelector('.join-date').innerText = this.getAttribute("joindate") || this.joindate;
        this.shadowRoot.querySelector('.user-email').innerText = this.getAttribute('email') || this.email;
        this.shadowRoot.querySelector('.user-bio').innerText = this.getAttribute('bio') || this.bio;
        this.shadowRoot.querySelector('.repos-score').innerText = this.getAttribute('repos') || this.repos;
        this.shadowRoot.querySelector('.followers-score').innerText = this.getAttribute('followers') || this.followers;
        this.shadowRoot.querySelector('.following-score').innerText = this.getAttribute('following') || this.following;
        this.shadowRoot.querySelector('.user-city').innerText = this.getAttribute('city') || this.city;
        this.shadowRoot.querySelector('.user-link').innerText = this.getAttribute('link') || this.link;
        this.shadowRoot.querySelector('.user-social-account').innerText = this.getAttribute('socialaccount') || this.socialaccount;
        this.shadowRoot.querySelector('.home-page').innerText = this.getAttribute('homepage') || this.homepage;
    }

}


window.customElements.define('user-card', UserCard);

arr.forEach(myFunction)

function myFunction() {
    const userCard = document.createElement('user-card');
    document.body.append(userCard);
}

// const userCardElem = document.querySelector('user-card-list');

// userCardElem.userCards = [
//     {
//         picture: "https://randomuser.me/api/portraits/lego/1.jpg",
//         username: "Bob",
//         joindate: "25 jan 2022",
//         email: "@bob"
//     }
// ]