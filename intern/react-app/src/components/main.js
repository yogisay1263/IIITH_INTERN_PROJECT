import React from 'react';
import CardList from './card';
import Sidebar from './Header';
import StudentPortalForm from './form';
import { Form } from 'react-router-dom';
import footer from './footer'
import Footer from './footer';

function main() {
  return (
    <div className="App">
      <Sidebar />
      <CardList />
      <Footer/>
    </div>
  );
}

export default main;
