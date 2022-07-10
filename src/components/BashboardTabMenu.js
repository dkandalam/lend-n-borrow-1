
const COLOR = "rgba(16, 185, 129, var(--tw-bg-opacity))";
const BashboardMenu = (props)=>{

    const {activeTab,setActiveTab} = props;
    
    return (
        <div className="p-4 flex flex-col">
            <div className={`p-4 flex flex-row  ${activeTab === 'Home' ? 'rounded bg-green-50':'text-sm'}`} 
            onClick={()=>{setActiveTab('Home')}} >
               <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill={COLOR}>
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                </div>
                <span className="p-1">Home</span>
            </div>
            <div className={`p-4 flex flex-row  ${activeTab === 'Groups' ? 'rounded bg-green-50':'text-sm'}`}
                onClick={()=>{setActiveTab('Groups')}}>
                <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={COLOR} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <span className="p-1">Groups</span>
               
            </div>
            <div className={`p-4 flex flex-row  ${activeTab === 'Settings' ? 'rounded bg-green-50':'text-sm'}`}
                onClick={()=>{setActiveTab('Settings')}}>
                    <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={COLOR} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </div>
                    <span className="p-1">Settings</span>
            </div>
            <div className={`p-4 flex flex-row  ${activeTab === 'Invite' ? 'rounded bg-green-50':'text-sm'}`}
                onClick={()=>{setActiveTab('Invite')}}>
                    <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={COLOR} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    </div>
                    <span className="p-1">Invite</span>
            </div>
            <div className={`p-4 flex flex-row ${activeTab === 'Logout' ? 'rounded bg-green-50':'text-sm'}`}
                onClick={()=>{setActiveTab('Logout')}} >
                <div className="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={COLOR} strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                </div>
                <span className="p-1">Logout</span>
            </div>
        </div>
    );
}

export default BashboardMenu;

