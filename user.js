const usersDB = [];

class User {
    constructor(fullname) {
        this._fullname = fullname;
    }

    get fullname() {
        return this._fullname;
    }
    set fullname(value) {
        this._fullname = value.trim();
    }
    addData(subject, countOfTest, correct) {
        usersDB.push({
            fullname: this.fullname,
            subject: subject,
            "number of questions": countOfTest,
            "correct answer": correct,
        });
    }
}




export { User, usersDB };