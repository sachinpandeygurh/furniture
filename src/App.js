import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Header />

     <Routes>
     <Route exact path="/" element={<Main/> } />
     </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
