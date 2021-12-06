import {js} from './data.js';
import {User, users} from './classes.js';
import {View} from './view.js';

class Testing {

    initialization() {
        this.view = new View();
    }

    start() {
        let name = this.view.getName();
        if(name == null || name.trim() == '') {
            return;
        }
        this.user = new User(name.trim());

        const subject = this.view.getSubject();
        const countOfTest = this.view.getCountOfTest();

        this.#getTest(subject, countOfTest);
    }

    #getTest(subject, count) {

        if(subject === 1) subject = js;
        else if (subject === 2) subject = js;

        const arr = [];

        for (let i = 1; i <= count; i++) {
            let question = this.view.showQuestions(subject[i].question, subject[i].variantes);
            let checkAnswer = this.#check(question, subject[i].answer);
            arr.push([i, checkAnswer]);
        }

        this.#getResult(arr, count);
        this.#restart();
        
    }
    #getResult(array, count) {
        let correct = array.filter(el => el[1] === true).length;
        this.view.showResult(correct, count);
    }

    #restart() {
        let res = this.view.showRestart();

        if(res) {
            this.start();
        }
    }
    #check(question, answer) {
        return question === answer;
    }
    
}

export { Testing };