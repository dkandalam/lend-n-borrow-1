import {createStore} from "@reduxjs/toolkit";
import {storeReducers} from "./reducers";
export const store = createStore(storeReducers);

/*
    this is passed to the store from UI.
*/
export const SPLIT_TYPE = {
    "EQUAL":"equal",
    "OWE":"owe",
    "OWES":"owes"
}

export const App_Store = {
    expense_id:12,
    users:['deepak.kireeti','test','test001','test002','test003'],
    groups:{
        "global":{
            id:0,
            users:['deepak.kireeti','test','test001']
        },
        "goa trip":{
            id:1,
            users:['deepak.kireeti','test','test001']
        }
    },
    expenses:[
        {
            id:10,date:new Date(),from:"deepak.kireeti@outlook.com",to:["test@gmail.com"],amount:120.71,slipt:'equal',group:'global',
            desc:'dinner at iBliss with team'
        },
        {
            id:11,date:new Date(),from:"deepak.kireeti@outlook.com",to:["test@gmail.com"],amount:200.71,slipt:'equal',group:'goa trip',
            desc:'car rental from mumbai to goa',
        }
    ],
    error:{}
}

/*
 * Access by Email.
 *
 */
export const User_Cred_Store_By_Email = {
    'deepak.kireeti@outlook.com':{
        id:'deepak.kireeti',
        full_name:'Deepak Kandalam',
        email:'deepak.kireeti@outlook.com',
        accessPoint:'LNB',
        password:'password12'
    },
    'test@gmail.com':{
        id:'test',
        full_name:'test user',
        email:'test@gmail.com',
        accessPoint:'LNB',
        password:'test'
    },
    'test_001@gmail.com':{
        id:'test_001',
        full_name:'test user 001',
        email:'test_001@gmail.com',
        accessPoint:'LNB',
        password:'test_001'
    },
    'test_002@gmail.com':{
        id:'test_002',
        full_name:'test user 002',
        email:'test@gmail.com',
        accessPoint:'LNB',
        password:'test_002'
    },
    'test_003@gmail.com':{
        id:'test_003',
        full_name:'test user 003',
        email:'test@gmail.com',
        accessPoint:'LNB',
        password:'test_003'
    }
}


