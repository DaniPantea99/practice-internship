class Address {
    constructor(zip, street) {
        this.zip = zip,
        this.street = street
    }
}

class User {
    constructor(name, { age, phone="1234567890", address } = {}) {
        this.name = name,
        this.age = age,
        this.phone = phone,
        this.address = address
    }
}

let user = new User('Bob', {age:20, phone: "0257464123", address: new Address('315200', 'Closca')});

console.log(user);