const SignupContent = (props) => {
    return (
      <div className="my-4">
        <div className="mt-4 rounded-lg border bg-white w-5/6 mx-auto max-w-lg">
          <div className="mx-2 my-2">
            <div className="text my-4 px-1">Signup</div>
            <div className="my-2 px-1">
              <div className="text-xl">Hi there! My name is</div>
              <div
                id="login_input"
                className="w-full border rounded-lg leading-3"
              >
                <input show="full-width" type="text" id="user_name"/>
              </div>
            </div>
            <div className="my-2 px-1">
              <div className="text-xs">Here`s my <b>email address</b></div>
              <div
                id="login_input"
                className="w-full border rounded-lg leading-3"
              >
                <input show="full-width" type="text" id="user_email"/>
              </div>
            </div>
            <div className="my-2 px-1">
              <div className="text-xs">Here`s my <b className="bold">password</b></div>
              <div
                id="login_input"
                className="w-full border rounded-lg leading-3"
              >
                <input show="full-width" type="password" />
              </div>
            </div>
            <div className="">
                <button type="submit" className="mx-1 my-1 p-2  border rounded-lg bg-yellow-500 text-white" >Sign me up!</button>
            </div>
        </div>
        </div>
      </div>
    );
  };
  
  export default SignupContent;