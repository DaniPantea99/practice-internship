class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    hadAccess() {
        return this.name === 'Bob'; 
    }
}


class NullUser {
    constructor() {
        this.id = -1,
        this.name = 'Guest'
    }
    hadAccess(){
        return false;
    }
}


const users = [
    new User(1, 'Bob'),
    new User(2, 'John')
]

function getUser(id) {

    // return users.find(user => user.id === id)

 const user = users.find(user => user.id === id)
    if (user == null) {
        return new NullUser();
    } else {
        return user;
    }
}

function printUser(id) {
    const user = getUser(id);

    // let name = 'Guest';
    // if (user != null && user.name != null)
    // name = user.name;
    // console.log('Hello ' + name);

    // for Null Object method
    console.log('Hello ' + user.name);

    // if (user != null && user.hasAccess != null && user.hadAccess()) {
    //     console.log('You have access');
    // } else {
    //     console.log('You are not allowed here');
    // }

    // for Null Object method
    if (user.hadAccess()) {
        console.log('You have access');
    } else {
        console.log('You are not allowed here');
    }

}