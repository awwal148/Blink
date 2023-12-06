import React, { useState } from 'react';
import Login from '../SignuporLogin/Login';
import SignUp from '../SignuporLogin/SignUp';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full gap-3">
        <button
          onClick={() => handleTabClick('login')}
          className={`py-2 px-4 font-palanquin font-bold ${
            activeTab === 'login' ? 'bg-black text-lg text-white' : 'bg-gray-200 text-gray-800'
          } rounded-tl-md rounded-bl-md focus:outline-none w-1/2`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabClick('signup')}
          className={`py-2 px-4 font-palanquin font-bold ${
            activeTab === 'signup' ? 'bg-black text-lg text-white' : 'bg-gray-200 text-gray-800'
          } rounded-tr-md rounded-br-md focus:outline-none w-1/2`}
        >
          Sign Up
        </button>
      </div>

      <div className="mt-4">
        {activeTab === 'login' ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Tabs;
