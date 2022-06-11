import React from "react";
import Header from "../components/Header";
import LoginContent from "../components/LoginContent";
const LoginPage = (props) => {
  return (
    <div>
      <Header />
      <div className="my-4 login-bg py-4">
        <LoginContent />
      </div>
    </div>
  );
};
export default LoginPage;
