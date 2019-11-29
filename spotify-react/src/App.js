import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './Components/SideBar';

function App() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
