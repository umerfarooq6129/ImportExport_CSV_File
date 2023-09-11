import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import ImportExportCsv from './pages/ImportExportCsv';
import About from './pages/about';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<ImportExportCsv />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
