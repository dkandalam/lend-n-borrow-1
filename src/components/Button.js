import React from 'react'
import {get} from 'lodash';
export default function Button(props){
    const primary = get(props,'primary',false);
    const buttonStyle = primary ? 'bg-green-300 text-white  rounded-lg p-4 ' : 'text-green-400 bg-white rounded-lg p-4'
    const label = get(props,'label','Pass in label');
    return (
        <div className="px-1 py-2">
            <button className={buttonStyle} onClick={(e)=>{props.onClick && props.onClick(e)}}>{label}</button>
        </div>

    )
}