import Header from '../components/Header'

const Dashboard = (props)=>{
    return (
        <div>
          <Header onlyBanner={true} />
          <div className="my-4 login-bg py-4">
            <span>Loading...</span>
          </div>
        </div>
      );
}
export default Dashboard;