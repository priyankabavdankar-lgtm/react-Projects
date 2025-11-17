import { useState, useEffect } from "react";
import { Card } from "./Card";

export function Home () {

    let [products, setProducts] =useState([])
    let [category, setCategory] = useState("all")
    let [price, setPrice] = useState("all-price")
    let [filterData, setFilterData] = useState([])

    async function fetchData(){
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProducts(data)
        setFilterData(data)
        }

        useEffect (() => {
            fetchData()
        },[])

        useEffect(()=>{
            let filtered = [...products]

            if(category!=="all"){
                filtered = filtered.filter(e=>e.category === category)
            }

            if(price === "low-price") {
                filtered = filtered.filter(e=>e.price < 100)
            }

              if(price === "med-price") {
                filtered = filtered.filter(e=>e.price > 100 && e.price <=500)
            }

              if(price === "high-price") {
                filtered = filtered.filter(e=>e.price > 500)
            }

            setFilterData(filtered)
        }, [category, price, products])


        return (
        <>
        <div className="Container">

             <h4 className="mb-3">🛍️ Filter by Category</h4>

            <div className="col-md-4">
                <select className="form-select" aria-label="Category select" onChange={e=>setCategory(e.target.value)}>
                <option value="all">All Categories</option>
                <option value="men's clothing">Men's Clothing</option>
                <option value="women's clothing">Women's Clothing</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
                </select>
            </div>

            <h4 className="mb-3">🛍️ Filter by Price</h4>

            <div className="col-md-4">
                <select className="form-select" aria-label="Category select" onChange={e=>setPrice(e.target.value)}>
                <option value="all-price">All Price</option>
                <option value="lowPrice">Less than 100</option>
                <option value="medPrice">100-500</option>
                <option value="highPrice">Above 500</option>
                </select>
            </div>
             <div className="row">   
                  {filterData.map(e=> <Card data={e}></Card>)}
             </div>
        </div>
        </>
    )
}