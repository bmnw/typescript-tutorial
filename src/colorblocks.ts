$(readyNow);

function readyNow () {
    console.log('document ready');
    $('#submit').on('click', newUser);
    $('body').on('click', '.user-button', createBlock);
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

const newUserButton = (userInput: User) => {
    console.log('in newUserButton', userId);
    $('#users').append(`
        <button id="${userId}" class="user-button" data-firstname=${userInput.firstName} data-lastname=${userInput.lastName}>
            ${userInput.firstName} ${userInput.lastName}
        </button>
    `);
    clearInputFields();
}

const clearInputFields = () => {
    $('#user-firstname').val("");
    $('#user-lastname').val("");
    $('#user-age').val("");
}

const createBlock = (event: any) => {
    console.log('in createBlock');
    let firstName = $(event.currentTarget).data('firstname');
    let lastName = $(event.currentTarget).data('lastname');
    $('#blocks').append(`
        <div class="block">
            <h5>Block by: ${firstName} ${lastName}</h5>
        </div>
    `);
}