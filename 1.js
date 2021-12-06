const users = [];

class User {
    constructor(fullname) {
        this._fullname = fullname;
        this.#addUser();  
    }

    get fullname() {
        return this._fullname.trim();
    }

    #addUser(){
        if(this.fullname !== null && this.fullname != '') {
            users.push({'fullname': this.fullname});
        }
    }
}


const user = new User(prompt("Введите ваше ФИО") || '');

console.log(user.fullname);
console.log(users);