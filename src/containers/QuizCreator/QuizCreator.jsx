import React, {Component} from 'react'
import classes from './QuizCreator.module.scss'
import Button from '../../components/UI/Button/Button'
import {createControl} from '../../form/formFramework'
import Input from '../../components/UI/Input/Input'
import Auxilliary from '../../hoc/Auxilliary/Auxilliary'

function createOptionControl (number) {
  return createControl({
    label: `Вариант ${number}`,
    errorMessage: "Поле не может быть пустым",
    id: number
  }, {
    required: true
  })
}

function createFormControls() {
  return {
    question: createControl({
      label: "Введите вопрос",
      errorMessage: "Вопрос не может быть пустым"
    }, {
      required: true
    }),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4)
  }
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls()
  }


  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  onChangeHandler =  (e, controlName) => {

  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
          const control = this.state.formControls[controlName]
          console.log(index)

          return (
            <Auxilliary key={controlName + index}>
              <Input
                label={control.label}
                value={control.value}
                valid={control.valid}
                shouldValidate={!!control.validation}
                touched={control.touched}
                errorMessage={control.errorMessage}
                onChange={event => this.onChangeHandler(event.target.value, controlName)}
              />
              { index === 0 ? <hr /> : null }
            </Auxilliary>
          )
    }) 
  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
        <h1>Создание тестов</h1>



          <form onSubmit={this.submitHandler}>
            { this.renderControls() }
            <select name="" id=""></select>

            <Button
              type="primary"
              onClick={this.addQuestionHandler}
            >
              Добавить вопрос
            </Button>

            <Button
              type="success"
              onClick={this.createQuizHandler}
            >
              Создать тест
            </Button>
          </form>
        </div>
      </div>
    )
  }
}