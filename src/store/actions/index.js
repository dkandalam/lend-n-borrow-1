import {cloneDeep} from "lodash";
import {INIT_STORE_LOGOUT, INIT_SESSION, INIT_STORE_LOGIN} from "../Constants";

export function initStore(store){
    return {
        type:"INIT_STORE",
        data:store
    }
}
export function initSession(){
    return {
        type:INIT_SESSION
    }
}
export function initLogout(){
    return {
        type:INIT_STORE_LOGOUT
    }
}
export function initLogin(userInfo){
    return {
        type:INIT_STORE_LOGIN,
        data:userInfo
    }
}

