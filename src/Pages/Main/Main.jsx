import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import './main.css'

const Main = () => {
    const location = useLocation();
    console.log(location.pathname);

  return (
    <>
    <div className='god'>
    <header className='header'>
      <h1 className='logo'>LOGO</h1>
      <div className='holder'>
        <h3><Link to='/' state={{from: location.pathname}} className='link'>Home↓</Link></h3>
        <h3><Link to='/users' state={{from: location.pathname}} className='link'>Users↓</Link></h3>
        <h3><Link to='/posts' state={{from: location.pathname}} className='link'>Posts↓</Link></h3>
        <h3><Link to='/products' state={{from: location.pathname}} className='link'>Products↓</Link></h3>
        <div className='search'><img src={require('../Main/searchy.png')} alt="" /></div>
      </div>
    </header>
    </div>
    <Outlet />
    </>    
  )
}

export default Main