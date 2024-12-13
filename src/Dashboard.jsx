import React from 'react';
import Img from './assets/img.jpg'; // Your weather background image

function Dashboard() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">New York City</h1>
          <h2 className="text-4xl mb-2">25°C</h2>
          <p className="text-2xl">Partly Cloudy</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
