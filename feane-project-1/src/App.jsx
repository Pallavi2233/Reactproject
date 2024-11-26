import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Typography} from "@mui/material"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";
import Header from "./Components/Header1/Header";
import Menu1 from "./Components/Menu1";
import Landing from "./Components/Landing";
import Section3 from "./Components/Section3";
import Section5 from "./Components/Section5";
import Signupfile1 from "./Components/Signupfile1";
import Feedback1 from "./Components/Feedback1";
import Footer1 from "./Components/Footer1";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact";
import Cart from "./pages/cart/Cart";

function App() {

  return (
    <div className="App">

    <ShopContextProvider>
    <Header/>
    <Landing/>
      <Routes>
          <Route path="/shop" element={<Shop/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<Cart/>} />
      </Routes>
   <Section3/>
   <Menu1/>
   <Section5/>
   <Signupfile1/>
   <Feedback1/>
   <Footer1/>
   </ShopContextProvider>
    </div>
  )
}

export default App
