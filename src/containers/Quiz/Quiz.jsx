import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {
  state = {
    results: {}, //{[id]: success/error}
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        id: 1,
        answers: [
          {text: 'Черный', id:1},
          {text: 'Синий', id:2},
          {text: 'Красный', id:3},
          {text: 'Зеленый', id:4}
        ]
      },
      {
        question: 'Год основая Питера?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          {text: '1700', id:1},
          {text: '1702', id:2},
          {text: '1703', id:3},
          {text: '1803', id:4}
        ]
      }
    ]
  }

  onRetryHandler = () => {
    this.setState({
      results: {},
      isFinished: false,
      activeQuestion: 0,
      answerState: null,
    })
  }

  onAnswerClickHandler = answerId => {
    if (this.state.answerState) {
      const value = Object.values(this.state.answerState)[0]
      if (this.state.answerState[value] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results
    
    if (question.rightAnswerId === answerId) {
      debugger
      if (!results[question.id]) {
          results[question.id] = 'success'
        }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          })
        }
        window.clearTimeout(timeout)
      },1000)
    }  else {
      results[question.id] = 'error'
      this.setState({
        answerState: {[answerId]: 'error'},
        results //results: results
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>

          {
            this.state.isFinished
            ? <FinishedQuiz 
                results = {this.state.results}
                quiz = {this.state.quiz}
                onRetry = {this.onRetryHandler}
              />
            : <ActiveQuiz 
                answers={this.state.quiz[this.state.activeQuestion].answers}
                question={this.state.quiz[this.state.activeQuestion].question}
                onAnswerClick={this.onAnswerClickHandler}
                quizLength={this.state.quiz.length}
                answerNumber={this.state.activeQuestion + 1}
                state={this.state.answerState}
              />
          }

        </div>
      </div>
    )
  }
}

export default Quiz