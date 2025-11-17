import { useState } from "react";

export function Login () {

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if(email === "admin@gmail.com" && password==="12345"){
            localStorage.setItem("islogin","true")
        }
    }

    return(
        <>
        
        <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px', marginTop:'50px'}}>
            <label>Email address</label>
            <input type="text" placeholder="Username" style={{padding:'5px'}} onChange={(e) => setEmail(e.target.value)}></input>

            <label>Password</label>
            <input type="password" placeholder="password" style={{padding:'5px'}} onChange={(e) => setPassword(e.target.value)}></input>
            <button type="submit">Submit</button>
        </div>
        </form>
        

        </>
    )
}