import React from 'react';
import './App.css';
import   Register   from './ui/Register';
import { Route,Routes } from 'react-router-dom';
import Login from './ui/Login';
import { Main } from './ui/Main';
import Cart from './ui/components/Cart';
import Description from './ui/components/Description';
import HomeContainer from './ui/containers/HomeContainer';
import  Checkout  from './ui/components/Checkout';
import  EmptyCart  from './ui/components/EmptyCart';

function App() {

  
  return (
    <div className="App">

        
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/HomeContainer" element={<HomeContainer/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/empty-cart" element={<EmptyCart/>} />
      </Routes>

        
      
    </div>
  );
}

export default App;













// import React, {useState} from 'react';
// import './App.css';
// import  Login  from './ui/Login';
// import   Register   from './ui/Register';

// function App() {
// const [currentForm, setCurrentForm] = useState('Login');

// const toggleForm = (formName) =>{
//   setCurrentForm(formName);
// }

//   return (
//     <div className="App">
//       {
//         currentForm === "Login" ? <Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/>
//       }
//     </div>
//   );
// }

// export default App;
