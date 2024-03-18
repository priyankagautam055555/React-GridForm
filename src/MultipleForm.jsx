import React, { useState } from "react";
const MultipleForm = () => { 
    const [formcontain, updateUpdate] = useState({
        fname: '',
        lname:''
    });
    const Changevalue = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const name = event.target.name;
        const value = event.target.value;

        updateUpdate((pervalue) => {
            if (name === "fname") {
                return {
                    fname: value,
                    lname: pervalue.lname
                }
            }
            else if (name === "lname") {
                return {
                    fname:pervalue.fname ,
                    lname:value
                }
             }
         })
     }



    return (<>
    
        <h1>Multiple Input Form{formcontain.fname}{formcontain.lname}</h1>
        <form className="formContains">
            <div className="InValue">
                <input type="text" onChange={Changevalue} name="fname" value={formcontain.fname}
                    placeholder="Please enter first name" />               
            </div>
            <div className="InValue">
                <input type="text" onChange={Changevalue} name="lname" value={formcontain.lname }
                    placeholder="Please enter second name" />                
            </div>
            <div className="InValue">
                <input type="text" onChange={Changevalue} name="email"
                    placeholder="Please enter emial" />               
            </div>
            <div>
                <button>Enter</button>
            </div>
        </form>
    </>)
}
export default MultipleForm;