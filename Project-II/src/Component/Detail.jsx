import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

export function Detail() {
    let [detail,setDetail] = useState({})
    let {id} = useParams("id")

    async function fetchData() {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()
        setDetail(data)
    }

    useEffect(()=>{
        fetchData()
    })
    return(
        <>
        <div className="col-md-7 mt-3 mx-auto">
            <img src={detail.image} alt="" width="50%" height="240px"/>
            <h1>This is details page {id}</h1>
            <h2>{detail.title}</h2>
            <h6>{detail.price}</h6>
        </div>

        </>
    )
}