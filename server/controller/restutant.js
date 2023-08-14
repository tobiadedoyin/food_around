const db = require("../db/dbConfig")

const getRestaurants = async(req, res)=>{
    try{
     const result = await db.query("SELECT * FROM resturants")  
     return res.status(200).json({message:"Details of restaurants around you", resultLength: result.rows.length, data: result['rows']})

    }catch(error){
        return res.status(500).json({message:error.message})
    }
}

const getOneRestaurant = async (req, res)=>{
    try{
     const result = await db.query("SELECT * FROM resturants WHERE id=$1", [req.params.id])
     return res.status(200).json({message:`Detail of restaurant with an id of ${req.params.id} `,resultLength: result.rowCount, result: result['rows']})
    }catch(error){
        return res.status(500).json({error: error.message})
    }
}

const createRestaurant  = async(req, res)=>{
    try{
        const result = await db.query("INSERT INTO resturants (name, location, price_range) VALUES ($1, $2, $3) returning *", [req.body.name, req.body.location, req.body.price_range])
     return res.status(201).json({message: `new restaurant added with id of ${result.id}`, result: result['rows']})
    }catch(error){
        return res.status(500).json({message: error.message});
    }
}

const editRestaurant = async (req, res)=>{
    try{
      const result = await db.query("UPDATE resturants SET name=$1, location=$2, price_range=$3 WHERE id=$4 returning *", [req.body.name, req.body.location, req.body.price_range, req.params.id])
      return res.status(200).json({message:`restaurant with id of ${req.params.id} is updated successfully`, result: result['rows']})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

const deleteRestaurant = async (req, res)=>{
    try{
       const result = await db.query("DELETE FROM resturants where id=$1 RETURNING *", [req.params.id])
       return res.status(200).json({message: `restaurant with id of ${req.params.id} is deleted successfully`, result: result['rows']})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}

module.exports ={getRestaurants, getOneRestaurant, createRestaurant, editRestaurant, deleteRestaurant}