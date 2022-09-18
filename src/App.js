
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom'
import User from './pages/user/User';
import UserList from './pages/userList/UserList';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

function App() {
  return (
    <div >
      <Topbar />
      <div className='container'>
        <Sidebar path='/sid' />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/user/:userId' element={<User />} />
          <Route path='/newUser' element={<NewUser />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/newproduct' element={<NewProduct />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
// 