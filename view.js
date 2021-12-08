class View {

    getName() {
        let name = prompt("Введите ваше ФИО", "");
        if(name == null) return;
        else if (name.trim() == '') name = this.errorName();
        return name;
    }
    errorName() {
        alert('Неправильное имя!');
        return this.getName();
    }

    getSubject() {
        return +prompt("Виберите предмет\n 1. JavaScritp\n 2. Html");
    }
    errorSubject() {
        alert(`Не правильно выбран предмет!`);
    }
    getCountOfTest() {
        return +prompt(`Количество тестов?`);
    }
    errorCount(count, subject) {
        alert(`Всего ${count} тестов по предмету \"${subject}\" !`);
    }
    showQuestions(question, variantes) {
        return prompt(`${question}\n${this.showVariantes(variantes)}`);
    }
    showVariantes(variantes) {
        let str = '';
        for (let [key, value] of Object.entries(variantes)) {
            str += `${key}) ${value}\n`;
        }
        return str;
    }
    showResult(correct, count) {
        return alert(`Количество верных ответов ${correct} из ${count} вопросов`);
    }

    showRestart() {
        return confirm("Хотите пройти тест заново?");
    }
}

export { View };