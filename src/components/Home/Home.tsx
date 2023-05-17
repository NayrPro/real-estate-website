import { Presentation } from "./Presentation"
import { Listings } from "../Services/Listings"
import { ClientFeedbackAttributes } from "./models/ClientFeedbackModel"
import { BlogPreview, BlogArray } from "./BlogPreview"
import ClientFeedbackSection from "./ClientFeedback";
import Footer from "./Footer";
import { Services } from "./Services";

const clientFeedbacks: ClientFeedbackAttributes[] = [
    {
      id: 1,
      text: 'I found my dream home thanks to this website!',
      author: 'Jane Doe',
      img: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      text: 'The search filters made it easy to find properties that met my criteria.',
      author: 'John Smith',
      img: "https://images.pexels.com/photos/14807470/pexels-photo-14807470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 3,
      text: 'The team was so helpful and responsive throughout the entire buying process.',
      author: 'Emily Johnson',
      img: "https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const posts: BlogArray[] = [
    {
      title: 'Top 10 Tips for First-Time Homebuyers',
      description: 'Avoid rookie mistakes',
    },
    {
      title: 'How to Negotiate the Best Deal on Your Next Home',
      description: 'Get the most bang for your buck',
    },
    {
      title: 'The Pros and Cons of Buying a Fixer-Upper',
      description: 'Is it worth the investment?',
    }
  ];

export const Home: React.FC = () => {
    return (
        <div>
            <Presentation />
            <Listings />
            <Services />
            <ClientFeedbackSection clientFeedbacks={clientFeedbacks}/>
            <BlogPreview posts={posts} />
            <Footer/>
        </div>

    ) }