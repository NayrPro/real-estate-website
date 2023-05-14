import { useState } from 'react'; 
import './Signup.scss';

interface LoginFormData {
    email: string;
    password: string;
  }
  
export const LoginForm = () => {
    const [formData, setFormData] = useState<LoginFormData>({
      email: '',
      password: ''
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
        <h2>Log in</h2>
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
        <button type="submit">Log In</button>
      </form>
    );
  };
  