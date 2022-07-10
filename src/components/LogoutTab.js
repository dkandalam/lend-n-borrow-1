import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import {ROUTE_DASHBOARD, ROUTE_LOGIN} from "../routes/RoutesConstants";
import Button from './Button'
import {connect} from "react-redux";
import {initLogout} from "../store/actions";
import {get} from "lodash";
function LogoutTab(props){
    //const history = useHistory();
    return (
        <div>
            <div className="p-4 ">
                <span className={"h2"}>Logout ?</span>
                <div className="flex flex-row w-1/5 ">
                    <Button onClick={()=>{
                        history.push(ROUTE_DASHBOARD);
                    }} label={'No'} primary />
                    <Button onClick={()=>{
                        props.logout();
                        //history.push(ROUTE_LOGIN);
                    }} label={'Yes'} />
                </div>
            </div>
        </div>
    )
}
export default connect((state,ownProps)=>{
    return {}
},(dispatch)=>{
    return {
        logout:()=>dispatch(initLogout())
    }
})(LogoutTab);