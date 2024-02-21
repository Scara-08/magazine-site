import React from 'react';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  const onBtnClick = () => navigate(-1);


  return (
    <div>
      <header className='miner'>
            <img src={require('../Home/minecraft.jpg')} alt="" />
      </header>
        <button onClick={onBtnClick}>Backy backy</button>
    </div>
  )
}

export default Users