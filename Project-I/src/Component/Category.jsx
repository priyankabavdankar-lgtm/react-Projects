import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {Card} from './Card'
export function Category () {

    let [datas, setDatas] = useState([])
    let {name} = useParams("name")

    async function fetchData() {
        let res = await fetch ("https://fakestoreapi.com/products")
        let data = await res.json()

        if(name == "all"){
        setDatas(data)
        }
        else{
            data=data.filter(e=>e.category==name)
            setDatas(data)
        }
    }

    useEffect(() => {
        fetchData()
    },[name])

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {datas.map(e=>(<Card data={e}></Card>))}
                </div>
            </div>
        </>
    ) 
}