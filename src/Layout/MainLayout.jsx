import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
  return (
    <div >
      <header>
      <Navbar></Navbar>
      </header>
      

      <main>
        <Outlet></Outlet>
      </main>


      <footer>
        {/* footer */}
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;