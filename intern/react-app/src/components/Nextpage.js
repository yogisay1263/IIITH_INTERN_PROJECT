// NextPage.js
import React from 'react';

import { Form } from 'react-router-dom';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import StudentPortalForm from './form';
import Search from '@mui/icons-material/Search';
import Header from './table';



import SixPieCharts from './Piechart';

const NextPage = () => {
  return (
    <div>
      <more/>
      <Header/>
      <SixPieCharts />

    </div>
  );
};

export default NextPage;
