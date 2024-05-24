import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../PagesCommunes/layouts/Layout';
import HomePageCC from '../ChefChantier/Pages/HomePageCC';


const App = () => {
  return (
    <Router>
      <Layout/>

    </Router>
  );
}

export default App;
