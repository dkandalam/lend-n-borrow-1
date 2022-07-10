import {useContext, useEffect, useState} from "react";
import {get} from 'lodash'
import {connect} from "react-redux";
import Button from "./Button";

const FriendsDropdown = (friends)=>{
    return (
        <select class="ui fluid search dropdown">
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
        </select>
    );
}

const AddExpense = (props)=>{

    const [add, setAdd] = useState(false)
    return (
        <div className="my-2 divider-solid">
            <div className="flex flex-row justify-evenly">
                <button className="text-white bg-green-300 rounded-lg p-4 " onClick={()=>{setAdd(!add)}}>Add Expense</button>
                <button className="text-white bg-green-300 rounded-lg p-4 " >Settel Expense</button>
            </div>
            <div className="w-1/2">
            {
                    add &&
                        <div className="flex flex-row">
                            <FriendsDropdown friends={props.friends || []} />
                            <div className="ui input focus">
                                <input type="text" placeholder="desc to amount" />
                            </div>
                            <div>
                                <Button label="Add" primary onClick={
                                    ()=>{
                                    }
                                }/>
                                <Button label="Cancel" />
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default connect((state,ownProps)=>{
    console.log(state);
    const userInfo = get(state,'userInfo',{email:''})
    const grpMembers = get(state,`groups.${userInfo.group}`,[])
    const friends = grpMembers.filter((email)=>{ return email !== userInfo.email})
    return {friends,...ownProps}
},null)(AddExpense);