import React from 'react'
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import { DataProvider } from './context/DataContext';
import { Outlet } from 'react-router-dom';

const Layout = ({ search, setSearch, width }) => {
  return (
    <div className="App">
      <Header title="React JS Blog"/>
        <DataProvider>
          <Nav/>
          <Outlet />
        </DataProvider>
      <Footer />
    </div>
  )
}

export default Layout