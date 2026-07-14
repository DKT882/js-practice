import Button from '../../../shared/components/Button'

function ContactForm({ message, confirmation, onMessageChange, onSubmit }) {
  return (
    <section className="contactSection" id="contact">
      <h2>Say Hi</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="message">Your message</label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={onMessageChange}
          placeholder="Write a short message"
        />
        <Button type="submit">Send</Button>
      </form>
      {message && <p className="preview">Typing: {message}</p>}
      {confirmation && <p className="confirmation">{confirmation}</p>}
    </section>
  )
}

export default ContactForm
