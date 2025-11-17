import {useState} from 'react'

export function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit (e) {
        e.preventDefault()
        if(username ==="Priyanka" && password === "12345") {
            localStorage.setItem("isLogin", "true")
        }
    }

    return (
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-container d-flex" style={{flexDirection:"column", alignItems:"center", marginTop:"50px", gap:"1vw"}}> 
                <label>Username</label>
                <input type="text" placeholder="Enter Username" style={{padding:".5vw 1vw"}} onChange={(e) => setUsername(e.target.value)}></input>

                <label>Password</label>
                <input type="password" placeholder="Enter Password" style={{padding:".5vw 1vw"}} onChange={(e) => setPassword(e.target.value)}></input>

                <button className="btn-primary">Submit</button>
                </div>  
            </form> 
        </>
    )
}