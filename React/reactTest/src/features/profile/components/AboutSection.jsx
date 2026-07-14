import Button from '../../../shared/components/Button'

function AboutSection({ showMore, onToggleShowMore }) {
  return (
    <section className="aboutSection">
      <h2>About Me</h2>
      <p>
        I enjoy learning React, JavaScript, and building projects that solve clear problems.
        {showMore &&
          ' I am currently improving my component structure, state handling, and event handling by making small practical apps.'}
      </p>
      <Button variant="secondary" onClick={onToggleShowMore}>
        {showMore ? 'Show Less' : 'Show More'}
      </Button>
    </section>
  )
}

export default AboutSection
