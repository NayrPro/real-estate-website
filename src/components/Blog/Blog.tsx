import { BlogArray } from '../Home/models/BlogModel';
import { PostCard } from './PostCard'; 
import "./Blog.scss"; 

const posts: BlogArray[] = [
  {
    id: "80207",
    title: 'How to Negotiate the Best Deal on Your Next Home',
    body: "Buying your first home is a huge milestone in your life, but it can also be a daunting task. There are many factors to consider when purchasing a home, from location and price to financing and inspections. To help make the process smoother and less stressful, here are the top 10 tips for first-time homebuyers: Determine Your Budget: Before you start house-hunting, it's important to know how much home you can afford. Determine your budget by looking at your income, expenses, and debt. A good rule of thumb is to spend no more than 30% of your income on housing expenses. Get Pre-Approved for a Mortgage: Getting pre-approved for a mortgage before you start looking at homes can help you narrow down your search and give you a better idea of what you can afford. It also shows sellers that you are a serious buyer.",
    image:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    author_username: "ChatGpt",
    date: "2023-05-12 20:15:49",
    commentsNb: 0
  },
  {
    id: "8957",
    title: 'Top 10 Tips for First-Time Homebuyers',
    body: "Buying your first home is a huge milestone in your life, but it can also be a daunting task. There are many factors to consider when purchasing a home, from location and price to financing and inspections. To help make the process smoother and less stressful, here are the top 10 tips for first-time homebuyers: Determine Your Budget: Before you start house-hunting, it's important to know how much home you can afford. Determine your budget by looking at your income, expenses, and debt. A good rule of thumb is to spend no more than 30% of your income on housing expenses. Get Pre-Approved for a Mortgage: Getting pre-approved for a mortgage before you start looking at homes can help you narrow down your search and give you a better idea of what you can afford. It also shows sellers that you are a serious buyer.",
    image:"https://images.unsplash.com/photo-1598257006626-48b0c252070d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    author_username: "ChatGpt",
    date: "2023-05-12 20:15:49",
    commentsNb: 0
  },
  {
    id: "807982",
    title: 'The Pros and Cons of Buying a Fixer-Upper',
    body: "Buying your first home is a huge milestone in your life, but it can also be a daunting task. There are many factors to consider when purchasing a home, from location and price to financing and inspections. To help make the process smoother and less stressful, here are the top 10 tips for first-time homebuyers: Determine Your Budget: Before you start house-hunting, it's important to know how much home you can afford. Determine your budget by looking at your income, expenses, and debt. A good rule of thumb is to spend no more than 30% of your income on housing expenses. Get Pre-Approved for a Mortgage: Getting pre-approved for a mortgage before you start looking at homes can help you narrow down your search and give you a better idea of what you can afford. It also shows sellers that you are a serious buyer.",
    image:"https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=996&q=80",
    author_username: "ChatGpt",
    date: "2023-05-12 20:15:49",
    commentsNb: 0
  }
];

export const Blog: React.FC = () => {
  return (
    <div className="post-list">
      <PostCard posts={posts} />
    </div>
  );
};
