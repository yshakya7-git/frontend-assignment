import './App.css';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartCounterProvider } from './contexts/CartCounterContext';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartCounterProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
          </Routes>
        </Router >
      </CartCounterProvider>
    </QueryClientProvider>
  );
}

export default App;
