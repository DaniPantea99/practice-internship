import { UserCard } from './user-card.js';
import { UserCardList } from './user-card-list.js';
import { Modal } from './modal.js';
import './create-edit-form.js';

const userCardsElement = document.querySelector('user-card-list');
const createNewBtn = document.querySelector('.add-user-btn');

let users = [
  {
    id: '1',
    picture: '',
    username: 'John',
    joindate: '25 Jan 2011',
    email: '@johnny',
    bio: 'my bio text sample text my bio text sample textmy bio text sampl',
    repos: '8',
    followers: '3938',
    following: '9',
    city: 'San Francisco',
    link: 'https://github.blog',
    socialaccount: '',
    homepage: '@github',
  }

];
userCardsElement.users = users;

function idGen() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

createNewBtn.addEventListener('click', () => {
  const createEdit = document.querySelector('create-edit');
  createEdit.show = true;
});

document.addEventListener('add', (evt) => {
  const { user } = evt.detail
  if (user.id) {
    const userIndex = users.findIndex((u) => u.id === user.id)
    if(userIndex > -1) {
      users[userIndex] = user;
    }
  } else {
    user.id = idGen();
    users = [...users, user];
  }
  userCardsElement.users = [...users];
})

document.addEventListener('edit', (evt) => {
  const createEdit = document.querySelector('create-edit');
  createEdit.show = true; 
  createEdit.user = evt.detail;
})


export { userCardsElement };
