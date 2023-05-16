import './Services.scss';

interface CardProps {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ title, description, link, icon }) => (
  <div className="card">
    <span className="material-symbols-rounded">
{icon}
</span>
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
            icon="attach_money"
          />
          <Card
            title="Rent"
            description="Browse our selection of rental properties and find the perfect place to call home."
            link="/rent"
            icon="location_away"
          />
          <Card
            title="Sell"
            description="Ready to sell your property? Our team of experts can help you get the best price."
            link="/sell"
            icon="real_estate_agent"
          />
      </div>
    </div>
  </section>
);
