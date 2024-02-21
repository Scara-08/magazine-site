import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Posts = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onBackClick = () => navigate(location.state?.from || '/')
  return (
    <div>
      <header className='miner'>
            <img src={require('../Home/miney.jpg')} alt="" />
        </header>
      <button onClick={onBackClick}>Go back fella</button>
      <div>
      </div>
    </div>
  );
};

export default Posts;