import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">login</Link>
        <Link to="/monitor">Monitor</Link>
        <Link to="/monitor">profile</Link>
        <Link to="/alerts">alerts</Link>
        <Link to="/updatethreshold">updatethreshold</Link>
        



    </div>
    
  )
}

export default Home