export function Button ({fetchValue}) {
    let buttons=["1","2","3","4","5","6","7","8","9","0","+","-","*","/","=","C","X","."]

    return(
        <>
            {buttons.map(e=><button className="py-3 px-4 m-3" onClick={()=>fetchValue(e)}> {e} </button>)}
        </>
    )
}

//e is like arrays each element print e=> and  <button> {e} </button>