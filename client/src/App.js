import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './components/Home';
import About from './components/About';
import FileUpload from './components/FileUpload';
import './App.css';
import FileUploadScreen from './components/FileUploadScreen';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/fileupload' element={<FileUpload />} />
          <Route path='/multifileupload' element={<FileUploadScreen />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
