import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';

const MainLayout = () => {
  return (
    <div>
      <header>
        <Home></Home>
      </header>
      

      <main>
        <Outlet></Outlet>
      </main>

      
      <footer>
        {/* footer */}
        Footer
      </footer>
    </div>
  );
};

export default MainLayout;