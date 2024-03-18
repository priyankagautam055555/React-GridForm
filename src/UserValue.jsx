import React, { useState } from "react";
const UserValue = () => { 
    const [intValue, intCurr] = useState("");//use for first input
    const [secondvalue, updsecondvalu] = useState("");//use for second input
    const [fullname, updatename] = useState("");//use for button
    const inputchange = (event) => {  //use for first input 
        intCurr(event.target.value);
    }
    const lastTwoname = (event) => { //use for second input
        updsecondvalu(event.target.value);
    }
    const onSubmitValue = (e) => { //use for button
        updatename(intValue +' '+ secondvalue);
        e.preventDefault();
    }
     return (
        <><h1>Hello{fullname}</h1>
            <form className="formContains" onSubmit={onSubmitValue}>
                
                <input type="text" onChange={inputchange}
                    placeholder="First name" value={intValue} />
                <br />
                <br/>
                <input type="text" onChange={lastTwoname}
                    placeholder="Last name" value={secondvalue} />
                <br/>
                <button type="submit">SUBMIT 👍</button>
            </form>
    </>
)
}
export default UserValue;