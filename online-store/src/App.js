import './App.css';
import ProductDetails from './components/products/ProductDetails';
import Products from './components/products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartCounterProvider } from './contexts/CartCounterContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import CartPages from './components/CartPages/CartPages';
import Home from './components/Home/Home';
import TopNavBar from './components/Header/TopNavBar';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartCounterProvider>
        <Router>
          <TopNavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/products/:id" element={<ProductDetails />} />
            <Route exact path="/carts/:id" element={<CartPages />} />

            
          </Routes>
        </Router >
      </CartCounterProvider>
    </QueryClientProvider>
  );
}

export default App;
