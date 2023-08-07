import {withRouter} from 'react-router-dom'

import {
  RegisterBgContainer,
  RegisterBottomSection,
  RegisterFormContainer,
  RegisterFormImage,
  FormMainContainer,
  FormHeading,
  FormContainer,
  NameLabel,
  InputElement,
  TopicsLabel,
  SelectElement,
  OptionElement,
  SubmitButton,
  ErrorMessage,
} from './styledComponents'

import RegisterContext from '../../context/RegisterContext'

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

const Register = props => (
  <>
    <RegisterContext.Consumer>
      {value => {
        const {
          nameInput,
          activeOptionId,
          changeName,
          changeTopic,
          submitForm,
          isRegistered,
          errorMessage,
        } = value

        const onChangeNameInput = event => {
          console.log(event.target.value)
          changeName(event.target.value)
        }

        const onChangeTopic = event => {
          console.log(event.target.value)
          changeTopic(event.target.value)
        }

        const onSubmitForm = event => {
          event.preventDefault()

          submitForm()
        }

        if (isRegistered === true) {
          const {history} = props

          history.replace('/')
        }

        return (
          <RegisterBgContainer>
            <RegisterBottomSection>
              <RegisterFormContainer>
                <RegisterFormImage
                  src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                  alt="website register"
                />
                <FormMainContainer>
                  <FormHeading>Let us Join</FormHeading>
                  <FormContainer onSubmit={onSubmitForm}>
                    <NameLabel htmlFor="name">NAME</NameLabel>
                    <InputElement
                      placeholder="Your name"
                      id="name"
                      value={nameInput}
                      onChange={onChangeNameInput}
                    />
                    <TopicsLabel htmlFor="name">TOPICS</TopicsLabel>
                    <SelectElement
                      value={activeOptionId}
                      onChange={onChangeTopic}
                    >
                      {topicsList.map(eachTopic => (
                        <OptionElement key={eachTopic.id} value={eachTopic.id}>
                          {eachTopic.displayText}
                        </OptionElement>
                      ))}
                    </SelectElement>
                    <SubmitButton>Register Now</SubmitButton>
                    <ErrorMessage>{errorMessage}</ErrorMessage>
                  </FormContainer>
                </FormMainContainer>
              </RegisterFormContainer>
            </RegisterBottomSection>
          </RegisterBgContainer>
        )
      }}
    </RegisterContext.Consumer>
  </>
)

export default withRouter(Register)
