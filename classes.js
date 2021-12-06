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




export {User, users};