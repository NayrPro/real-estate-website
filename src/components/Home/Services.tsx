import './Services.scss';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, link }) => (
  <div className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <a className="card-link" href={link}>Learn more</a>
  </div>
);

export const Services: React.FC = () => (
  <section className="services">
    <div className="container">
      <div className="card-row">
          <Card
            title="Buy"
            description="Find your dream home today with our selection of properties for sale."
            link="/buy"
          />
          <Card
            title="Rent"
            description="Browse our selection of rental properties and find the perfect place to call home."
            link="/rent"
          />
          <Card
            title="Sell"
            description="Ready to sell your property? Our team of experts can help you get the best price."
            link="/sell"
          />
      </div>
    </div>
  </section>
);
