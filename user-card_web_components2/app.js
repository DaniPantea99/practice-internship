import './user-card.js';
import './user-card-list.js';
import {Modal} from './modal.js'

const userCardsElement = document.querySelector('user-card-list');

userCardsElement.users = [
  {
        picture: "https://randomuser.me/api/portraits/men/1.jpg",
        username: "John",
        joindate: "25 Jan 2011",
        email: "@johnny",
        bio: "my bio text sample text",
        repos: "8",
        followers: "3938",
        following: "9",
        city: "San Francisco",
        link: "https://github.blog",
        socialaccount: "",
        homepage: "@github"
  }
  // ,
  // {
  //       picture: "https://randomuser.me/api/portraits/men/13.jpg",
  //       username: "Bob",
  //       joindate: "24 Jan 2011",
  //       email: "@bob0bob",
  //       repos: "60",
  //       followers: "3500",
  //       following: "500",
  //       city: "Los Angeles",
  //       link: "https://github.blog",
  //       homepage: "@github"
  // }
]