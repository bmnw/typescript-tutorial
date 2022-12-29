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
    id: number;
}

class UserInfo {
    firstName: string;
    lastName: string;
    age: number;
    id: number;

    constructor(firstName: string, lastName: string, age: number, id: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    } 
}

let existingUsers: User[] = [];
let userId: number = 0;

const newUser = () => {
    console.log('in newUser');
    userId++;
    let firstName: string = $('#user-firstname').val() as string;
    let lastName: string = $('#user-lastname').val() as string;
    let age: number = $('#user-age').val() as number;
    let id: number = userId;
    let user: User = new UserInfo(firstName, lastName, age, id);
    existingUsers.push(user);
    console.log(existingUsers);
    newUserButton(user);
}

const newUserButton = (userInput: User) => {
    console.log('in newUserButton', userId);
    $('#users').append(`
        <button id="${userId}" class="user-button" data-userid=${userInput.id} data-firstname=${userInput.firstName} data-lastname=${userInput.lastName} data-age=${userInput.age}>
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
    let age = $(event.currentTarget).data('age');
    $('#blocks').append(`
        <div class="block">
            <h5>Block by: ${firstName} ${lastName}, age ${age}</h5>
        </div>
    `);
}