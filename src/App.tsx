import React = require("react");
import { Routes, Route, Navigate} from "react-router-dom";
import { RootState } from "./Store/store";
import Navbar from './components/Navbar/Navbar';
import {Home} from './components/Home/Home';
import {SignUpForm} from './components/User/Signup';
import {LoginForm} from './components/User/Login';
import {Blog} from './components/Blog/Blog';
import {ContactUs} from './components/Contact/ContactUs';
import {AboutUs} from './components/AboutUs/AboutUs';
import { MarketPlace } from "./components/Services/MarketPlace";
import { Sell } from "./components/Services/Sell";
import { Article } from "./components/Blog/Article";
import { PostArticle } from "./components/Blog/PostArticle";
import { Authentication } from "./Authentication";
import { useAppSelector } from "./Store/hooks";
import {Account} from "./components/User/Account";
import { EditProperty } from "./components/User/Dashboard/Edit/EditProperty";
import { EditArticle } from "./components/User/Dashboard/Edit/EditArticle";

const App: React.FC = () => {

    const user = useAppSelector((state : RootState) => state.user.value);

    return (
        <React.Fragment>
          <Navbar />
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Article />} />
                <Route path="/buyorrent" element={<MarketPlace />} />
                <Route path="/login" element={
                  <Authentication roles={user.user} role={{name: ""}} page={{name: "login"}}>
                    <LoginForm />
                  </Authentication>
                }/>
                <Route path="/blog/article" element={
                  <Authentication roles={user.user} role={{name: "blogger"}} page={{name: "blog/article"}}>
                    <PostArticle />
                  </Authentication>
                }/>
                <Route path="/signup" element={
                  <Authentication roles={user.user} role={{name: ""}} page={{name: "signup"}}>
                    <SignUpForm />
                  </Authentication>
                }/>
                <Route path="/sell" element={
                  <Authentication roles={user.user} role={{name: "seller"}} page={{name: "sell"}}>
                    <Sell />
                  </Authentication>
                }/>
                <Route path="/account" element={
                  <Authentication roles={user.user} role={{name: "member"}} page={{name: "account"}}>
                    <Account />
                  </Authentication>
                }/>
                <Route path="/edit/property/:id" element={
                  <Authentication roles={user.user} role={{name: "seller"}} page={{name: "edit/property"}}>
                    <EditProperty />
                  </Authentication>
                }/>
                <Route path="/edit/article/:id" element={
                  <Authentication roles={user.user} role={{name: "blogger"}} page={{name: "edit/article"}}>
                    <EditArticle />
                  </Authentication>
                }/>
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>  
        </React.Fragment>
    );
  };
export default App;