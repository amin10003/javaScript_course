
let killablemixin = {
    kil: function() {
        console.log(`${this.firstName} has been killed `);
    },
    injure: function() {
        console.log(`${this.firstName} has been injured `)
    },
}


class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}


class User extends Person {
    constructor (firstName, lastName, userName, password) {
        super(firstName, lastName);
        this.userName = userName;
        this.password = password;
    }
}

Object.assign(User.prototype, killablemixin);

let user = new User('Ali', 'Jama', 'aliusename', 'alipass')
console.log(user.injure());
console.log(user.kil())
