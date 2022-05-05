import './App.css';
import {Routes,Route} from 'react-router-dom'
import HeaderUp from './Header/HeaderUp/HeaderUp'
import HeaderDown from './Header/HeaderDown/HeaderDown'
import Container from './Container/Container'
import CartPage from './CartPage/CartPage';

function App() {
  return (
    <div>
      
    hi
      <Routes>
        <Route path="/add-cart-reactjs" element={
          <div>
            <HeaderDown />
            <Container />
          </div>
        } />

        <Route path="/add-cart-reactjs/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
