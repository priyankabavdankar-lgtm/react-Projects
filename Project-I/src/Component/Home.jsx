import { useEffect } from "react";
import { useState } from "react"
import { Card } from "./Card";

export function Home ({search}) {
    let [datas,setDatas] = useState([])
    let [category, setCategory] = useState("all") 
    let [price, setPrice] = useState("all-price")
    let [filterData, setFilterData] = useState([])

    async function fetchData(){
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()
        console.log(search)

        if(search){
            data=data.filter(e=>e.title.toLowerCase().includes(search))
            setDatas(data)
            setFilterData(data)
        }
        else{
        setDatas(data)
        setFilterData(data)
        }
    }

    useEffect(()=>{
        fetchData()
    },[search])

    useEffect(() => {
        let filtered = [...datas]
        
        if(category !== "all") {
            filtered = filtered.filter(e => e.category === category)
        }

        if (price === "low-price") {
            filtered = filtered.filter(e => e.price < 100)
        }

        if (price === "med-price") {
            filtered = filtered.filter(e => e.price > 100 && e.price <=500)
        }

        if (price === "high-price") {
            filtered = filtered.filter(e => e.price > 500)
        }
        setFilterData(filtered)
    }, [category, price, datas])

    return (
        <>

        <div className="Container">
             <div className="col-md-4">
                <select className="form-select" aria-label="Category select" onChange={e=>setCategory(e.target.value)}>
                    <option value="all">All Categories</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewellery</option>
                </select>
            </div>

            <div className="col-md-4">
                <select className="form-select" onChange={e=>setPrice(e.target.value)}>
                    <option value="all-price">All Price</option>
                    <option value="low-price">less than 100</option>
                    <option value="med-price">100-500 Price</option>
                    <option value="high-price">Above 500</option>
                </select>
            </div>

            <div className="row">
                {filterData.map(e=><Card data={e}></Card>)}
            </div>
        </div>
        
        </>
    )
}