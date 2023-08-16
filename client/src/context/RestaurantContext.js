import React, {useState, createContext} from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = props =>{
      const [restaurants, setRestaurants] = useState([])
    

      // const addRestaurants = (restaurant)=>{
      //   setRestaurants([...restaurants, restaurant])
      // }
      // console.log(restaurants)
  return(
    <RestaurantsContext.Provider value={{restaurants, setRestaurants}}>
     {props.children}
    </RestaurantsContext.Provider>
  )
}