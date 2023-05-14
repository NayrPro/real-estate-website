import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import {Home} from './components/Home/Home';
import {SignUpForm} from './components/User/Signup';
import {LoginForm} from './components/User/Login';
import {Blog} from './components/Blog/Blog';
import {Listings} from './components/Services/Listings';
import {ContactUs} from './components/Contact/ContactUs';
import {AboutUs} from './components/AboutUs/AboutUs';

const App: React.FC = () => {
    return (
        <div>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/services" element={<Listings />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/contactus" element={<ContactUs />} />
          </Routes>  
        </div>
    );
  };
export default App;