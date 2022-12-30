"use strict";
$(readyNow);
function readyNow() {
    console.log('document ready');
    $('#submit').on('click', newUser);
    $('body').on('click', '.user-button', createBlock);
}
class UserInfo {
    constructor(firstName, lastName, age, id, numBlocks) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.numBlocks = numBlocks;
    }
}
let existingUsers = [];
let userId = 0;
let numBlocks = 0;
const newUser = () => {
    console.log('in newUser');
    userId++;
    let firstName = $('#user-firstname').val();
    let lastName = $('#user-lastname').val();
    let age = $('#user-age').val();
    let id = userId;
    let numBlocks = 0;
    let user = new UserInfo(firstName, lastName, age, id, numBlocks);
    existingUsers.push(user);
    console.log(existingUsers);
    newUserButton(user);
};
const newUserButton = (userInput) => {
    console.log('in newUserButton', userId);
    $('#users').append(`
        <button id="${userId}" class="user-button" data-userid=${userInput.id} data-firstname=${userInput.firstName} data-lastname=${userInput.lastName} data-age=${userInput.age}>
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
    let age = $(event.currentTarget).data('age');
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
};
