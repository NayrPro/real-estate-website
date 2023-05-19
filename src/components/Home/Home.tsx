import { Presentation } from "./Presentation"
import { Listings } from "../Services/Listings"
import { ClientFeedbackAttributes } from "./models/ClientFeedbackModel"
import { BlogPreview } from "./BlogPreview"
import ClientFeedbackSection from "./ClientFeedback";
import Footer from "./Footer";
import { Services } from "./Services";
import { BlogArray } from "./models/BlogModel";

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
      id: "",
      title: 'Top 10 Tips for First-Time Homebuyers',
      body: 'Avoid rookie mistakes',
      image:"https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      author_username: "",
      date: "",
      commentsNb: 0
    },
    {
      id: "",
      title: 'How to Negotiate the Best Deal on Your Next Home',
      body: 'Get the most bang for your buck',
      image:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      author_username: "",
      date: "",
      commentsNb: 0
    },
    {
      id: "",
      title: 'The Pros and Cons of Buying a Fixer-Upper',
      body: 'Is it worth the investment?',
      image:"https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80",
      author_username: "",
      date: "",
      commentsNb: 0
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