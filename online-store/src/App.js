import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartCounterProvider } from './contexts/CartCounterContext';
import { QueryClientProvider, QueryClient } from 'react-query';
import CartPages from './components/CartPages/CartPages';
import Home from './components/Home/Home';
import TopNavBar from './components/Header/TopNavBar';
import ProductsDetails from './components/ProductPage/ProductsDetails';
import Product from './components/ProductPage/Product';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartCounterProvider>
        <Router>
          <TopNavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/products" element={<Product />} />
            <Route exact path="/products/:id" element={<ProductsDetails />} />
            <Route exact path="/carts/:id" element={<CartPages />} />

            
          </Routes>
        </Router >
      </CartCounterProvider>
    </QueryClientProvider>
  );
}

export default App;
