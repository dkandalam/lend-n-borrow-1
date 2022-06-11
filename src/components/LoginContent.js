const LoginContent = (props) => {
  return (
    <div className="my-4">
      <div className="mt-4 rounded-lg border bg-white w-5/6 mx-auto max-w-lg">
        <div className="mx-2 my-2">
          <div className="text my-4 px-1">Login</div>
          <div className="my-2 px-1">
            <div className="text-xs">Email Address</div>
            <div
              id="login_input"
              className="w-full border rounded-lg leading-3"
            >
              <input show="full-width" type="text" />
            </div>
          </div>
          <div className="my-2 px-1">
            <div className="text-xs">Password</div>
            <div
              id="login_input"
              className="w-full border rounded-lg leading-3"
            >
              <input show="full-width" type="password" />
            </div>
          </div>
          <div className="w-full border rounded-lg bg-green-500">
            <div className="my-1 text-white flex justify-center">
              <button type="submit">Login</button>
            </div>
          </div>
          <div className="my-2 py-1">
            <div className="w-full text-center text-sm text-green-400">
              <span>Forgot your password ?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
