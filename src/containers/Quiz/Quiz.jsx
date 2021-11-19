import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz.jsx'

class Quiz extends Component {
  state = {
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

  onAnswerClickHandler = (answerId) => {
    const question = this.state.quiz[this.state.activeQuestion]
    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'succes'}
      })
      const timeout = window.setTimeout(()=>{
        if(this.isQuizFinished()) {
          console.log('Finished')
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1
          })
        }
        window.clearTimeout(timeout)
      },1000)
    }  else {
      this.setState({
        answerState: {[answerId]: 'error'}
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
          <ActiveQuiz 
            question={this.state.quiz[this.state.activeQuestion].question}
            answers={this.state.quiz[this.state.activeQuestion].answers}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion+1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz