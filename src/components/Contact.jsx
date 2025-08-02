function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out!</p>
      <ul>
        <li>Email: support@bookmanager.com</li>
        <li>Phone: +1 (555) 123-4567</li>
      </ul>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" rows={4}></textarea>
        <button type="submit" disabled>Send (Demo Only)</button>
      </form>
    </div>
  );
}   
export default Contact;