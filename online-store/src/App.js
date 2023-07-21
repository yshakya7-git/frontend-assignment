import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './components/redux/store/Store';
import Cart from './components/card/Cart';

function App() {
  return (
    <>
      <Router>
        <Provider store={Store}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </Provider>

      </Router >
    </>
  );
}

export default App;
