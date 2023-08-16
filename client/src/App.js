import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./router/Home";
import RestaurantDetails from "./router/RestaurantDetails";
import UpdateRestaurant from "./router/UpdateRestaurant";
import { RestaurantsContextProvider } from "./context/RestaurantContext";

function App() {
  return (
    
    <div className="container">
      <RestaurantsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<RestaurantDetails/>} />
          <Route path="/:id/update" element={<UpdateRestaurant/>} />
         </Routes>
      </BrowserRouter>
      </RestaurantsContextProvider>
      
    </div>
  );
}

export default App;
