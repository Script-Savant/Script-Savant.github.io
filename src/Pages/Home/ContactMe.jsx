import { useState } from "react";

export default function ContactMe() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact Form Submission: ${topic}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phoneNumber}\nTopic: ${topic}\nMessage: ${message}`;

    window.open(
      `mailto:alexkienjeku@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">Fill The Form Below To Reach Out</p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="last-name"
              id="last-name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phone-number"
              id="phone-number"
              placeholder="+254 722 111 111"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </label>
          <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">Choose a topic</span>
            <select
              id="choose-topic"
              className="contact--input text-md"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            >
              <option>Select One...</option>
              <option>Development</option>
              <option>Testing and QA</option>
              <option>Consultancy</option>
              <option>Invite me for an interview</option>
            </select>
          </label>
          <label htmlFor="message" className="contact--label">
            <span className="text-md">Message</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="8"
              placeholder="Type your message..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">I accept the terms</span>
          </label>
        </div>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}