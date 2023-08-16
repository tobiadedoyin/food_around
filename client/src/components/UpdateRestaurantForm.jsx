import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantContext'
import axios from 'axios'

export default function UpdateRestaurant(props) {
  const {id} = useParams()
  const {restaurants} = useContext(RestaurantsContext)
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] =  useState("")
 console.log(id)

 const fetchData = async()=>{
  const response = await axios.get(`http://localhost:3001/api/v1/restaurants/${id}`)
  console.log(response.data.result["0"].name)
  setName(response.data.result["0"].name)
  setLocation(response.data.result["0"].location)
  setPriceRange(response.data.result["0"].location.price_range)
 }
 useEffect(()=>{
   fetchData()
 }, [])

 const handleSubmit = async(e)=>{
  e.preventDefault();
  const response = await axios.put(`http://localhost:3001/api/v1/restaurants/${id}`, 
  {name, location, price_range: priceRange})
  console.log(response)
 }
  return (
    <div>
     <h1>{name}</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="'name">Name</label>
          <input type="text" id='name' value={name} onChange={(e)=>setName(e.target.value)} className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input type="text" id='location' value={location} onChange={(e)=>setLocation(e.target.value)} className="form-control" />
        </div>
        
           <label htmlFor="priceRange">price_range</label> 
          <select name="" id="priceRange" className='custom-select' value={priceRange} onChange={(e)=>setPriceRange(e.target.value)}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        <button className="btn btn-primary my-4" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
