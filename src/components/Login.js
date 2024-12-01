import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for routing
import '../styles/Login.css'; // Make sure to link the separate CSS file for styles

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left side with image */}
        <div className="login-image">
          <img src="https://theyogahub.ie/wp-content/uploads/2018/02/1838_5-Simple-And-Essential-Beginner%E2%80%99s-Yoga-Poses-For-Good-Health_iS.jpg" alt="Login" />
        </div>

        {/* Right side with login form */}
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
          </form>

          {/* Login with Google */}
          <div className="google-login">
            <button className="btn btn-secondary">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google logo" />
              Login with Google
            </button>
          </div>

          {/* Register Link */}
          <div className="register-link">
            <p>Don't have an account? <Link to="/Register">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
