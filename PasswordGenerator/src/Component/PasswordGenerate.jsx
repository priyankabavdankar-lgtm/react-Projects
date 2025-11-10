import { useState } from "react";

export let PasswordGenerate = () => {

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)

    function generateRandomPassword () {

   let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                      "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

    let numbers = ["0","1","2","3","4","5","6","7","8","9"];

    let specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

    let values = smallLetters.concat(capitalLetters,numbers,specialChars)

    console.log(values);

    let password="";

    for(let i =0; i<=length; i++)
        password+=values[Math.floor(Math.random()*values.length)]

    setPassword(password)
    }

    return(
        <>
        <input type="number" placeholder="Enter the password" onChange={(e)=>setLength(e.target.value)} value={length}></input>
        <input type="text" readOnly value={password}></input>
        <button onClick={() => generateRandomPassword()}>Generate</button>
        </>
    )
}