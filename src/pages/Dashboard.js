import Header from '../components/Header'
import {useState} from 'react';
import BashboardTabMenu from '../components/BashboardTabMenu'
import DbHome from '../components/DbHome'
import LogoutTab from "../components/LogoutTab";
const Dashboard = (props)=>{

    const [activeTab,setActiveTab] = useState('Home');
    console.log('activeTab',activeTab);
    let content = null;
    switch(activeTab){
      case 'Home':{
        content = <DbHome />
        break;
      }
        case 'Logout':{
            content = <LogoutTab />
            break;
        }

      default:{
        content = <span >Loading...</span>
      }
    }
    return (
        <div>
          <Header onlyBanner={true} />
          <div className="my-4 login-bg py-4">
            <div className="max-w-7xl borderd rounded-lg bg-white mx-auto flex">
              <div className="w-44 p-2">
                <BashboardTabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
              </div>
              <div className="w-full p-2">
                {content}
              </div>
            </div>
          </div>
        </div>
      );
}
export default Dashboard;