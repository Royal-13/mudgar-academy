import React from "react";
const index = () => {
  return (
    <div className="login-color"> {/* Add the "login-color" class to the root div */}
      <div className="login-background">
        <div className="login-shape" />
        <div className="login-shape" />
      </div>
      <form className="login-form">
        <h3>Login Here</h3>
        <label className="login-label" htmlFor="username">Username</label>
        <input className="login-input" type="text" placeholder="Email or Phone" id="username" />
        <label className="login-label" htmlFor="password">Password</label>
        <input className="login-input" type="password" placeholder="Password" id="password" />
        <button className="login-button">Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google" /> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook" /> Facebook
          </div>
        </div>
      </form>
    </div>
  );
};
export default index;
