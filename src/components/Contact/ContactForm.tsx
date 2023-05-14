import { useState } from 'react'; 
import './ContactUs.scss';


export const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Code to submit the form goes here
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Please use the form below to get in touch with us.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};