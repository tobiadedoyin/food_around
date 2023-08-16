import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { RestaurantsContext } from '../context/RestaurantContext';
import {useNavigate} from "react-router-dom"

export default function RestaurantList(props) {
 const {restaurants, setRestaurants} = useContext(RestaurantsContext)
// const addRestaurants = useContext(RestaurantsContext)

const navigate = useNavigate();

 
 const fetchData = async ()=>{
    try{
      const response= await axios.get("http://localhost:3001/api/v1/restaurants");
    //  console.log(response.data.data)
      setRestaurants(response.data.data)
     }catch(error){
      console.log(error.message)
     }
  }

  useEffect(()=>{
   fetchData()
  },[restaurants])

  const handleDelete = async(id)=>{
    try{
      const response = await axios.delete(`http://localhost:3001/api/v1/restaurants/${id}`)
      setRestaurants(restaurants.filter(restaurant =>{
        return  restaurant.id !== id
      }))
    }catch(error){
      console.log(error.message)
    }
  }

  const handleUpdate = async (id)=>{
    navigate(`/${id}/update`)
  }

  return (
    <div className='list-group'>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th>Restaurant</th>
            <th>Location</th>
            <th>Price Range</th>
            <th>Ratings</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {restaurants && restaurants.map((restaurant, index)=>{
            return(
           <tr key={index}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{"$".repeat(restaurant.price_range)}</td>
              <td>Reviews</td>
              <td><button className='btn btn-warning' onClick={()=>handleUpdate(restaurant.id)}>Update</button></td>
              <td><button className="btn btn-danger" onClick={()=>handleDelete(restaurant.id)}>Delete</button></td>
         </tr> 
            )
           
          })}
         
        </tbody>
      </table>
    </div>
  )
}
