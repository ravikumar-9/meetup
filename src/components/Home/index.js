import {withRouter} from 'react-router-dom'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeSection,
  WelcomeHeading,
  RegisterParagraph,
  RegisterButton,
  RegisterImage,
  HelloHeading,
  Topic,
} from './styledComponents'

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {nameInput, activeOptionId, isRegistered} = value

      const onGoToLogin = () => {
        const {history} = props
        history.replace('/register')
      }

      return isRegistered ? (
        <HomeSection>
          <HelloHeading>Hello {nameInput}</HelloHeading>
          <Topic>Welcome to {activeOptionId}</Topic>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeSection>
      ) : (
        <>
          <HomeSection>
            <WelcomeHeading>Welcome to Meetup</WelcomeHeading>
            <RegisterParagraph>Please register for the topic</RegisterParagraph>
            <RegisterButton onClick={onGoToLogin}>Register</RegisterButton>
            <RegisterImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup
"
            />
          </HomeSection>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default withRouter(Home)
