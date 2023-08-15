import React from 'react'

export default function RestaurantList() {
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
          <tr>
            <td>yakoyo</td>
            <td>Lagos</td>
            <td>$$</td>
            <td>Ratings</td>
            <td><button className='btn btn-warning'>Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
          <tr>
            <td>yakoyo</td>
            <td>Lagos</td>
            <td>$$</td>
            <td>Ratings</td>
            <td><button className='btn btn-warning'>Update</button></td>
            <td><button className="btn btn-danger">Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
