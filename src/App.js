import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import ErrorHandler from "./components/ErrorHandler";
import {User_Cred_Store_By_Email} from './store/'
import { AuthContext } from "./components/AuthContext";
import {useState} from 'react'
export default function App(props) {
  
  //User info strored in the state.
  const [UserInfo,setUserInfo] = useState(null);

  //App User Credential Info -- add user incase when signin.
  const [UserCredStore,updateUserCredStore] = useState({...User_Cred_Store_By_Email});

  const addUserToApp = (userInfo)=>{

    const {email,fullName,password, accessPoint='LNB'} = userInfo;
    const _CredStore = {UserCredStore};
    _CredStore[email] = {
        email,fullName,password,accessPoint
    }
    updateUserCredStore(_CredStore);
  }

  const appAuthContext = {UserCredStore,UserInfo,setUserInfo,addUserToApp}

  return (
    <BrowserRouter forceRefresh={true} >
      <ErrorHandler>
        <AuthContext.Provider value={appAuthContext}>
          <div className="App">
            <AppRoutes />
          </div>
        </AuthContext.Provider>
      </ErrorHandler>
    </BrowserRouter>
  );
}
