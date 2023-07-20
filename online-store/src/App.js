import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/products" element={<Products/>} />
        </Routes>

      </Router >
    </>
  );
}

export default App;
