import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';


function App() {
  return (
  <div>
  <React.Fragment>
  <BrowserRouter>
  <Router/>
   </BrowserRouter>
   </React.Fragment>
  </div>
  );
}

export default App;
