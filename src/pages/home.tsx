import React from 'react';
import './home.scss';
import headerBg from '../images/head.png'
export const Home = () => {
  return (
    <div>
      <div className="x" style={{backgroundImage:`url(${headerBg})`}}></div>
    </div>
  );
};
