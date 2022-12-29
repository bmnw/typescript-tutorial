"use strict";
$(readyNow);
function readyNow() {
    console.log('document ready');
    $('#submit').on('click', newUser);
    $('body').on('click', '.user-button', createBlock);
}
class UserInfo {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
let existingUsers = [];
let userId = 0;
const newUser = () => {
    console.log('in newUser');
    let firstName = $('#user-firstname').val();
    let lastName = $('#user-lastname').val();
    let age = $('#user-age').val();
    let user = new UserInfo(firstName, lastName, age);
    existingUsers.push(user);
    console.log(existingUsers);
    userId++;
    newUserButton(user);
};
const newUserButton = (userInput) => {
    console.log('in newUserButton', userId);
    $('#users').append(`
        <button id="${userId}" class="user-button" data-firstname=${userInput.firstName} data-lastname=${userInput.lastName}>
            ${userInput.firstName} ${userInput.lastName}
        </button>
    `);
    clearInputFields();
};
const clearInputFields = () => {
    $('#user-firstname').val("");
    $('#user-lastname').val("");
    $('#user-age').val("");
};
const createBlock = (event) => {
    console.log('in createBlock');
    let firstName = $(event.currentTarget).data('firstname');
    let lastName = $(event.currentTarget).data('lastname');
    $('#blocks').append(`
        <div class="block">
            <h5>Block by: ${firstName} ${lastName}</h5>
        </div>
    `);
};
