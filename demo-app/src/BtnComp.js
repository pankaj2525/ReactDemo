import React, { Component } from 'react';
function BtnComp(props) {
    let defaultValue;
    function sendValue(e) {
        console.log("Clicked", defaultValue);
        props.recieveDefaultValue(defaultValue);
    }
    function recieveValue(e) {
        console.log(e.target.value);
        defaultValue = e.target.value;
    }
    return (
        <div className='btnBox'>
            <input type="text" onChange={recieveValue}></input>
            <button onClick={sendValue}>submit</button>
            <button >clickMe</button>
        </div>
    )
}
export default BtnComp;
