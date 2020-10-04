import React from "react";

const signupForm = (
  <form className="signup-form">
    <div aria-label="Subscription Details">
      <input
        type="text"
        name="firstname"
        aria-label="First Name"
        placeholder="First name"
      />
      <input
        type="text"
        name="lastname"
        aria-label="Last Name"
        placeholder="Last name"
      />
      <input type="text" name="email" aria-label="Email" placeholder="Email" />
    </div>
    <button id="subscribe" type="submit">
      Subscribe
    </button>
  </form>
);

const signupContent = (
  <div className="signup-content">
    <h2>Subscribe</h2>
    <p>Sign up with your email address to receive news and updates.</p>
    {signupForm}
  </div>
);

const SignupBox = <div className="box signup-box">{signupContent}</div>;

export default SignupBox;
