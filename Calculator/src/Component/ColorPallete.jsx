import { useState } from "react"

export function ColorPallete () {

    const [color, setColor] = useState("")
    

//     function colorBgPallet (color) {
    
//     // document.body.style.backgroundColor = color; 

//     // this above code is for change body color directly
// }

    return (
        <>

        <div style={{width:"200px", height:"200px", border: "1px solid black", backgroundColor:`${color}`}}></div>

            <button onClick={()=> setColor("Red")}>Red</button>

            <button onClick={()=> setColor("Green")}>Green</button>

            <button onClick={()=> setColor("Yellow")}>Yellow</button>

            <button onClick={()=> setColor("Blue")}>Blue</button>
        </>
    )
}