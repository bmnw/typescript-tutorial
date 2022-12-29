$(readyNow);

function readyNow () {
    console.log('document ready');
}

interface User {
    firstName: string;
    lastName: string;
    age: number;
}

class UserInfo {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    } 
}

// arguments for UserInfo will be the user-entered info from the DOM
// const user: User = new UserInfo();