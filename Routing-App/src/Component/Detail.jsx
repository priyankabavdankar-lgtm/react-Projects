import { useParams } from "react-router-dom"

export function Detail () {
    let {id} = useParams("id")
    console.log(id);

    return (
        <>
        <h1>This is Details Page</h1>
        <p>Id is {id}</p>
        </>
    )
}

///we have to pass id in url after /detail/300   <--- eg.