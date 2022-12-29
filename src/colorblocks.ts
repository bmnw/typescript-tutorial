$(readyNow);

function readyNow () {
    console.log('document ready');
    $('#submit').on('click', newUser);
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

let existingUsers: User[] = [];
let userId: number = 0;

const newUser = () => {
    console.log('in newUser');
    let firstName: string = $('#user-firstname').val() as string;
    let lastName: string = $('#user-lastname').val() as string;
    let age: number = $('#user-age').val() as number;
    let user: User = new UserInfo(firstName, lastName, age);
    existingUsers.push(user);
    console.log(existingUsers);
    userId++;
    newUserButton(user);
}

const newUserButton= (userInput: User) => {
    console.log('in newUserButton', userId);
    $('#users').append(`
        <button id="${userId}">
            ${userInput.firstName} ${userInput.lastName}
        </button>
    `);
    clearInputFields();
}