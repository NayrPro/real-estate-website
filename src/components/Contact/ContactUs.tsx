import './ContactUs.scss';
import {ContactForm} from "./ContactForm";

export const ContactUs: React.FC = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <p>Please use the form below to get in touch with us.</p>
      <ContactForm />
    </div>
  );
};

