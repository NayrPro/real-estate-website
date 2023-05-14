import { ClientFeedbackAttributes } from './models/ClientFeedbackModel';
import './ClientFeedback.scss';


type ClientFeedbackSectionProps = {
  clientFeedbacks: ClientFeedbackAttributes[];
};

const ClientFeedbackSection: React.FC<ClientFeedbackSectionProps> = ({
  clientFeedbacks,
}) => {
  return (
    <section className="client-feedback-section">
      <h2>Client Feedback</h2>
      <div className="client-feedback-cards">
        {clientFeedbacks.map((feedback) => (
          <div className="client-feedback-card" key={feedback.id}>
            <div className="client-feedback-text">
              <p>{feedback.text}</p>
            </div>
            <div className="client-feedback-author">
              <p>{feedback.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
