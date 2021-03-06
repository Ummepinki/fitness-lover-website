
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';
import ServicesDetail from './Pages/ServicesDetail/ServicesDetail';

import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path='/service/:serviceId' element={<ServicesDetail></ServicesDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkout" element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>}>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
