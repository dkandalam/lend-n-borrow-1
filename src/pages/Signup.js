import React from "react";
import Header from "../components/Header";
import SignupContent from "../components/SignupContent";

const Signup = (props) => {
  return (
    <div>
      <Header />
      <div className="my-4 login-bg py-4">
        <SignupContent />
      </div>
    </div>
  );
};
export default Signup;
