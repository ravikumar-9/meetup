import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'

import Home from './components/Home'

import Register from './components/Register'

import NotFound from './components/NotFound'

import RegisterContext from './context/RegisterContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

console.log(topicsList)

// Replace your code here
class App extends Component {
  state = {
    nameInput: '',
    activeOptionId: topicsList[0].displayText,
    isRegistered: false,
  }

  changeName = name => {
    this.setState({nameInput: name})
  }

  changeTopic = topic => {
    this.setState({activeOptionId: topic})
  }

  submitForm = () => {
    this.setState({isRegistered: true})
  }

  render() {
    const {nameInput, activeOptionId, isRegistered} = this.state

    return (
      <>
        <RegisterContext.Provider
          value={{
            activeOptionId,
            nameInput,
            isRegistered,
            changeName: this.changeName,
            changeTopic: this.changeTopic,
            submitForm: this.submitForm,
          }}
        >
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </RegisterContext.Provider>
      </>
    )
  }
}

export default App
