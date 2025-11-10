import { useState } from "react";

export function UserForm () {
const [name, setName] = useState("")

const handleChange = (e) => {
    setName (e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${name}!`);
};

return (

    <>
    <div>
        <form onSubmit={() => handleSubmit()}>

            <input type="text" placeholder="Enter your Name" onChange={handleChange} value={name} style={{padding:"5px"}}/>
            <button type="submit">Submit</button>

        </form>

        <p style={{marginTop:"10px"}}>Your Name: {name}</p>
    </div>
    </>
)

}

