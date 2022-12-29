"use strict";
$(readyNow);
function readyNow() {
    console.log('document ready');
}
class UserInfo {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}
// arguments for UserInfo will be the user-entered info from the DOM
// const user: User = new UserInfo();
