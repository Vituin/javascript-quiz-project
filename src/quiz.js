class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
    constructor(questionsValue, timeLimitValue, timeRemainingValue) {
        this.questions = questionsValue
        this.timeLimit = timeLimitValue
        this.timeRemaining = timeRemainingValue
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }
    // 2. getQuestion()
    getQuestion() {
        return this.questions[this.currentQuestionIndex]

    }
    // 3. moveToNextQuestion()
    moveToNextQuestion() {
        return this.currentQuestionIndex++
    }

    // 4. shuffleQuestions()
    shuffleQuestions() {
        let currentIndex = this.questions.length
        let randomIndex

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [this.questions[currentIndex], this.questions[randomIndex]] = [this.questions[randomIndex], this.questions[currentIndex]];
        }
        return this.questions;
    }

    // 5. checkAnswer(answer)
    checkAnswer(answer) {
        if (answer) {
            return this.correctAnswers++
        }
    }

    // 6. hasEnded()
    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        } else {
            return true
        }
    }
}