import {cloneDeep} from "lodash";
import {INIT_SESSION, INIT_STORE_ACTION, CLEAN_SESSION, INIT_STORE_LOGOUT, INIT_STORE_LOGIN} from "../Constants";

export function storeReducers(state,action){
    console.log(`Got called for action type ${action.type}`);
    switch(action.type){
        case INIT_SESSION:{
            const _state = cloneDeep(state);
            _state.session = {
                "login_time":new Date()
            }
            return _state;
        }
        case INIT_STORE_ACTION:{
            return cloneDeep(action.data)
        }
        case CLEAN_SESSION:{
            const _state = cloneDeep(state);
            _state.session = null;
            return _state;
        }
        case INIT_STORE_LOGIN:{
            const _state = cloneDeep(state);
            _state.user = cloneDeep(action.data);
            return _state;
        }
        case INIT_STORE_LOGOUT:{
            const _state = cloneDeep(state);
            _state.user = null;
            return _state;
        }
    }
}

