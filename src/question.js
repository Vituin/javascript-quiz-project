class Question {
    // YOUR CODE HERE:
    //
    // 1. constructor (text, choices, answer, difficulty)
    constructor(textValue, choicesValue, answerValue, difficultyValue) {
        this.text = textValue
        this.choices = choicesValue
        this.answer = answerValue
        this.difficulty = difficultyValue
    }
    // 2. shuffleChoices()

    shuffleChoices() {
        let currentIndex = this.choices.length
        let randomIndex

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.choices[currentIndex], this.choices[randomIndex]] = [this.choices[randomIndex], this.choices[currentIndex]];
        }
        return this.choices;
    }
}