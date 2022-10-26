import './user-card.js';
import './user-card-list.js';
import { Modal } from './modal.js';
import './create-edit-form.js';

const userCardsElement = document.querySelector('user-card-list');
const createNewBtn = document.querySelector('.add-user-btn');

let users = [
  // {
  //   id: '1',
  //   picture: '',
  //   username: 'John',
  //   joindate: '25 Jan 2011',
  //   email: '@johnny',
  //   bio: 'my bio text sample text my bio text sample textmy bio text sampl',
  //   repos: '8',
  //   followers: '3938',
  //   following: '9',
  //   city: 'San Francisco',
  //   link: 'https://github.blog',
  //   socialaccount: '',
  //   homepage: '@github',
  // }

];
userCardsElement.users = users;

createNewBtn.addEventListener('click', () => {
  const createEdit = document.querySelector('create-edit');
  createEdit.show = true;
});

document.addEventListener('add', (evt) => {
  const { user } = evt.detail
  users = [...users, user];
  userCardsElement.users = [...users];
})

export { userCardsElement };
