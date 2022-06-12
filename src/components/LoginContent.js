import {useState,useContext} from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from './AuthContext';
const LoginContent = (props) => {
  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {UserCredStore,setUserInfo} = useContext(AuthContext);
  const [errorMap,setErrorMap] = useState({email:'',password:''})

  const onSubmit = ()=>{

      if(!email){
        setErrorMap({email:'Email is null'})
      }

      if(!password){
        setErrorMap({...errorMap,password:'Password is null'})
      }

      if(!UserCredStore[email]){
        setErrorMap({...errorMap,email:'Invalid Email'})
      }
      if(UserCredStore[email].password !== password){
        setErrorMap({...errorMap,password:'Invalid Password'})
      }
      setUserInfo(UserCredStore[email]);
      history.push('/dashboard')

  }

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
              <input show="full-width" id={'user_email'} type="text" onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <span className="text-red-600 text-sm p-1">{errorMap['email']}</span>
          </div>
          <div className="my-2 px-1">
            <div className="text-xs">Password</div>
            <div
              id="login_input"
              className="w-full border rounded-lg leading-3"
            >
              <input show="full-width" id={'user_password'} type="password" onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <span className="text-red-600 text-sm p-1">{errorMap['password']}</span>
          </div>
          <div className="w-full border rounded-lg bg-green-500">
            <div className="my-1 text-white flex justify-center">
              <button type="submit" onClick={onSubmit}>Login</button>
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
