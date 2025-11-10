export let passGen = () => {

    const [password, setPassword] = useState("")
    const [upper, setUpper] = useState(false)
    const [num, setNum] = useState(false)
    const [char, setChar] = useState(false)

    function generator (){
        let smallLetters = []
        let capLetters = []
        let symbols = []
        let numbers = []

        let values = smallLetters

        if (upper){
            values=values.concat(capLetters)
        }

        if (char){
            values=values.concat(symbols)
        }

        if(num){
            values.concat(numbers)
        }

        console.log(values);
        let password="";

        for (let i=0; i,length; i++ ) 
            password+=values[Math.floor(Math.random()*values.length)]

        setPassword(password)
    }

    return(
        <>
        <input></input>
        <button></button>
        </>
    )
}