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
    numBlocks: number;
}

class UserInfo {
    firstName: string;
    lastName: string;
    age: number;
    id: number;
    numBlocks: number;

    constructor(firstName: string, lastName: string, age: number, id: number, numBlocks: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.numBlocks = numBlocks;
    } 
}

let existingUsers: User[] = [];
let userId: number = 0;
let numBlocks: number = 0;

const newUser = () => {
    console.log('in newUser');
    userId++;
    let firstName: string = $('#user-firstname').val() as string;
    let lastName: string = $('#user-lastname').val() as string;
    let age: number = $('#user-age').val() as number;
    let id: number = userId;
    let numBlocks: number = 0;
    let user: User = new UserInfo(firstName, lastName, age, id, numBlocks);
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
    let firstName: string = $(event.currentTarget).data('firstname');
    let lastName: string = $(event.currentTarget).data('lastname');
    let age: number = $(event.currentTarget).data('age');
    numBlocks++;
    $('#blocks').append(`
        <div class="block">
            <h5>Block by: ${firstName} ${lastName}, age ${age}.</h5>
        </div>
    `);
    $('#num-blocks').empty();
    $('#num-blocks').append(`
        <span id="num-blocks">${numBlocks}</span>
    `);
}