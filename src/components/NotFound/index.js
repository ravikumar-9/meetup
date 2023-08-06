import {
  FailureBgContainer,
  FailureSectionImage,
  FailureSectionHeading,
  FailureSectionDescription,
} from './styledComponents'

const NotFound = () => (
  <>
    <FailureBgContainer>
      <FailureSectionImage
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <FailureSectionHeading>Page Not Found</FailureSectionHeading>
      <FailureSectionDescription>
        We are sorry, the page you requested could not be found
      </FailureSectionDescription>
    </FailureBgContainer>
  </>
)

export default NotFound
