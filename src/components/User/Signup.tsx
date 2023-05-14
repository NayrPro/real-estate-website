import { useState } from 'react'; 
import './Signup.scss';

interface SignUpFormData {
    username: string;
    email: string;
    password: string;
    userType: 'seller' | 'blogger' | 'none';
  }
  
export const SignUpForm = () => {
    const [formData, setFormData] = useState<SignUpFormData>({
      username: '',
      email: '',
      password: '',
      userType: 'none'
    });
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }));
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
      // send the form data to the server
    };
  
    return (
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="userType">I am a:</label>
          <select name="userType" id="userType" value={formData.userType} onChange={handleInputChange}>
            <option value="none">Choose an option</option>
            <option value="seller">Seller</option>
            <option value="blogger">Blogger</option>
            <option value="none">None</option>
          </select>
        </div>
        <button type="submit">Sign up</button>
      </form>
    );
  };
  