import React = require("react");
import { BlogArray } from "../Home/models/BlogModel";
import "./PostCard.scss";
import "./Article.scss";
import { CommentsModel } from "./CommentsModel";
import { Comment } from "./Comment";
import { PostComment } from "./PostComment";

const post : BlogArray =
    {
      id: "80207",
      title: 'How to Negotiate the Best Deal on Your Next Home',
      body: "Buying your first home is a huge milestone in your life, but it can also be a daunting task. There are many factors to consider when purchasing a home, from location and price to financing and inspections. To help make the process smoother and less stressful, here are the top 10 tips for first-time homebuyers: Determine Your Budget: Before you start house-hunting, it's important to know how much home you can afford. Determine your budget by looking at your income, expenses, and debt. A good rule of thumb is to spend no more than 30% of your income on housing expenses. Get Pre-Approved for a Mortgage: Getting pre-approved for a mortgage before you start looking at homes can help you narrow down your search and give you a better idea of what you can afford. It also shows sellers that you are a serious buyer.",
      image:"https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      author_username: "ChatGpt",
      date: "2023-05-12 20:15:49",
      commentsNb: 0
    };
    
const comments: CommentsModel[] = [
    {
        id: 1,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 2,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 3,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 4,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 5,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 6,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 7,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 8,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 9,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    },
    {
        id: 9,
        author_name: "Commenter",
        body: "Great job",
        date: "2023-05-10 18:36:57",
        updated_date: ""
    }
];

export const Article: React.FC = () => {
  return (  
    <React.Fragment>
        <div className="article-content">
            <div 
            className="blog-card-page"
            >
            <div className="blog-card-image" style={{backgroundImage: 'url('+post.image+'})'}}></div>
            <div className="blog-card-content">
                <div className="blog-card-header"><h3 className="blog-card__title">{post.title}</h3><span>author : {post.author_username}</span></div>
                <p className="blog-card__date"><span style={{display: 'block'}}>{post.date}</span><span><span className="material-symbols-outlined">
    comment
    </span> {post.commentsNb}</span></p>
                <p>{post.body}</p>
            </div>
            </div>
        </div>
        <PostComment/>
        {comments.map((comment) => (
            <Comment key={comment.id} comments={comment}/>
        ))}
    </React.Fragment>
  );
};
