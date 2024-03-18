import React, { useState } from "react";
const headinggrid = "Please enter values ";
const SecondForm = () =>{
const [noneValue, setvalues] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });

const inputEvents = (event) => {    
    console.log(event.target.value);
    console.log(event.target.name);
    //const value = event.target.value;
    //const name = event.target.name;
    const { value, name } = event.target;
    
    setvalues((preValue) => {
        console.log(preValue);
        /*if (name === 'fname') {
            return {
                fname: value,
                lname: preValue.lname,
                email: preValue.email,
                phone: preValue.phone
            }
            
        }
        else if (name === 'lname') {
            return {
                fname: preValue.fname,
                lname: value,
                email: preValue.email,
                phone: preValue.phone
            }
            
        }
        else if (name === 'email') {
            return {
                fname: preValue.fname,
                lname: preValue.lname,
                email: value,
                phone: preValue.phone
            }
            
        }
        else if (name === 'phone') {
            return {
                fname: preValue.fname,
                lname: preValue.lname,
                email: preValue.email,
                phone: value
            }
            
        }*/
        return {
            ...preValue,
        [name]:value,
        }
        
    })
    }

return (<>
    <h2 style={{ textAlign: "center" }}>{headinggrid}{noneValue.fname}{noneValue.lname}{noneValue.email}{noneValue.phone}</h2>
        <form style={{width:"100%", textAlign:"center"}}>
            <div className="secondgrid">
                <input name="fname" onChange={inputEvents}
                 placeholder="First name" value={noneValue.fname} type="text" />
            </div>
            <div className="secondgrid">
            <input name="lname" onChange={inputEvents}
                placeholder="Last name" type="text" value={noneValue.lname}/>
        </div>
        <div className="secondgrid">
            <input name="email"  onChange={inputEvents} 
                placeholder="enter email" value={noneValue.email} type="email" autoComplete="off"/>
        </div>
        <div className="secondgrid">
            <input name="phone" onChange={inputEvents}
                placeholder="enter your phone no." value={noneValue.phone} type="number"/>
            </div>
            
            <div className="secondgrid">
                <button>Enter</button>
        </div>
        
    </form>
</>)
}
export default SecondForm;