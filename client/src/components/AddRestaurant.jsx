import React, { useContext } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { RestaurantsContext } from '../context/RestaurantContext';

export default function AddRestaurant(props) {
  const {restaurants, setRestaurants, addRestaurants}=useContext(RestaurantsContext)
  const [name, setName] = useState("");
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState("Price");

  const [rest, setRest] = useState([]) 

  const handleSubmit = async(e) =>{
    e.preventDefault()
    try{
     const response = await axios.post("http://localhost:3001/api/v1/restaurants", {
      name, location, price_range: priceRange
     })
    //  console.log(response.data)
    const data = response.data.result;
     setRestaurants([...restaurants, data])
    }catch(error){
      console.log(error.message)
    }
  }
  // console.log(restaurants)
  return (
    <div className='mb-4'>
      <form action="">
        <div className="form-row">
          <div className="col">
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='name'/>
          </div>
          <div className="col">
            <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} className='form-control'  placeholder='location'/>
          </div>
          <div className="col">
          <select value={priceRange} onChange={(e)=>setPriceRange(e.target.value)} className='custom-select'>
            <option >price range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
          </div>
          <button onClick={handleSubmit} className="btn btn-primary">Add</button>
        </div>
      </form>
    </div>
  )
}
