import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./router/Home";
import RestaurantDetails from "./router/RestaurantDetails";
import UpdateRestaurant from "./router/UpdateRestaurant";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<RestaurantDetails/>} />
          <Route path="/update" element={<UpdateRestaurant/>} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
