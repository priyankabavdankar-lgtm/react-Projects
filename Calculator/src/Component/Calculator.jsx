import { Input } from "./Input";
import { Button } from './Button';
import { useState } from "react";

export function Calculator () {

    const [data, setData] = useState("");

    function fetchValue(e) {
        
        if(e==="="){
            setData(String(eval(data)))
        }
        else if (e==="C"){
            setData("")
        }
        else if (e==="X"){
            setData(data.substring(0,data.length-1))
        }
        else{
            setData(data+e)
        }
    }

return(
    <>
       <div className="Container">
            <div className="row">
                <div className="col-md-4 mx-auto mt-5">
                    <div className="card">
                        <div className="card-body">
                            <Input data={data}/>
                            <Button fetchValue={fetchValue}/>
                        </div>
                    </div>
                </div>
            </div>
       </div>
   
    </>
);

}
