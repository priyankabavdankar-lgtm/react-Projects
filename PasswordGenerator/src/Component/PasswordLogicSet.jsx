import { useEffect, useState } from "react";

export let PasswordLogicSet = () => {

    const [password, setPassword] = useState("")
    const [length, setLength] = useState(8)
    const [upper, setUpper] = useState(false)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)

    function generateRandomPassword () {

   let smallLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let capitalLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
                      "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

    let numbers = ["0","1","2","3","4","5","6","7","8","9"];

    let specialChars = ["!","@","#","$","%","^","&","*","(",")","-","_","+","="];

    let values = smallLetters

    if (upper) {
        values = values.concat(capitalLetters)
    }
    if (char) {
        values = values.concat(specialChars)
    }
    if (num) {
         values = values.concat(numbers)
    }

    console.log(values);

    let password="";

    for(let i=0; i<=length; i++)
        password+=values[Math.floor(Math.random()*values.length)]

    setPassword(password)
    }

    useEffect (()=>{
        generateRandomPassword()
    }, [upper,num,char,length])

    return(
        <>
        <input type="number" placeholder="Enter the password" onChange={(e)=>setLength(e.target.value)} value={length}></input>
        <input type="text" readOnly value={password}></input>

        <div>
            <input type="checkbox" value={upper} onChange={() => setUpper(upper=>!upper)}/> Uppercase
            <input type="checkbox" value={char} onChange={() => setChar(char=>!char)}/> Special Char
            <input type="checkbox" value={num} onChange={() => setNum(num=>!num)}/>Numbers
            <input type="range" min="8" max="20" onChange={(e) => setLength(e.target.value)} value={length}/>
            <p>length is {length}</p>
        </div>

        <button onClick={() => generateRandomPassword()}>Generate</button>
        </>
    )
}