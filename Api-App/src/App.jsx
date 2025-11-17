import { useEffect } from 'react';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Component/Card';
function App() {

  const [products, setProducts] = useState([])
  const [category, setCategory] = useState("all")
  const [price, setPrice] = useState("all-price")
  const [filterProducts, setFilterProducts] = useState([])

  async function FetchData () {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json()
      setProducts(data);
      setFilterProducts(data);
      
    } catch (error) {
      console.log(error)
    }
  }
  useEffect (() =>{
      FetchData()

  },[])

  useEffect (() =>{
    let filtered = [...products]

    if(category!=="all" ){
        filtered = filtered.filter(e=>e.category===category)
      }

      if(price==="lowPrice"){
        filtered= filtered.filter(e=>e.price<100)
      }
      if(price==="medPrice"){
        filtered= filtered.filter(e=>e.price>=100 && e.price<500)
      }
      if(price==="highPrice"){
        filtered=filtered.filter(e=>e.price>=500 && e.price<=1000)
      }
      setFilterProducts(filtered)
  }, [category, price, products])


  return (
    <>
      <div className="container">
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
        {filterProducts.map(e => <Card data={e}></Card>)}
      </div>

   
     
    </div>
    </>
  )
}

export default App
