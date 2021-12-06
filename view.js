class View {

    getName() {
        return prompt("Введите ваше ФИО", '');
    }
    getSubject() {
        return +prompt("Виберите предмет\n 1. JavaScritp\n 2. Html");
    }
    getCountOfTest() {
        return +prompt("Количество тестов");
    }

    showQuestions(question, variantes) {
        return prompt(`${question}\n${this.showVariantes(variantes)}`);
    }
    showVariantes(variantes) {
        let str = '';
        for (let [key, value] of Object.entries(variantes)) {
            str += `${key} ${value}\n`;
        }
        return str;
    }
    showResult(correct, count) {
        return alert(`Количество верных ответов ${correct} из ${count} вопросов`);
    }
    
    showRestart() {
        return confirm("Хотите пройти тест заново");
    }
}

export { View };