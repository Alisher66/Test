import { js, html } from './data.js';
import { User } from './user.js';
import { View } from './view.js';

class Testing {

    init() {
        this.view = new View();
    }

    start() {
        let name = this.view.getName();
        if (name == null) return;

        this.user = new User(name.trim());

        let subject = this.view.getSubject();
        subject = this._existedSubject(subject);
        if (subject === 0) return;

        let countOfTest = this.view.getCountOfTest();

        this._getTest(subject, countOfTest);
    }

    _getTest(subject, count) {

        if (subject === 1) {
            subject = js;
            subject.name = "Java script";
        } else if (subject === 2) {
            subject = html;
            subject.name = "Html";
        }

        count = this._checkСountOf(subject, count);

        const questions = this._randomQuestions(count, subject.length);

        let arr = [];
        questions.forEach(i => {
            let question = this.view.showQuestions(subject[i].question, subject[i].variantes);
            let checkAnswer = this._check(question, subject[i].answer);
            arr.push(checkAnswer);
        });

        const correct = this._result(arr, count);

        this.user.addData(subject.name, count, correct);

        this._restart();

    }

    _randomQuestions(count, allTest) {
        let rand, res = [];
        for (let i = 0; i < count; i++) {
            rand = Math.floor(0 + Math.random() * allTest);
            if (!res.includes(rand)) {
                res.push(rand);
            } else i--;
        }
        return res;
    }

    _result(array, count) {
        let correct = array.filter(el => el === true).length;
        this.view.showResult(correct, count);
        return correct;
    }

    _check(question, answer) {
        return question === answer;
    }

    _checkСountOf(subject, count) {
        while (true) {
            if (count <= subject.length) {
                break;
            }
            this.view.errorCount(subject.length, subject.name);
            count = this.view.getCountOfTest();
        }
        return count;
    }
    _existedSubject(subject) {
        while (true) {
            if (subject == 0 || subject == 1 || subject == 2) {
                break;
            }
            this.view.errorSubject();
            subject = this.view.getSubject();
        }
        return subject;
    }

    _restart() {
        let res = this.view.showRestart();
        if (res) {
            this.start();
        }
    }
}

export { Testing };