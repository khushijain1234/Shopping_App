import React, {useState} from "react";
import './Auth.css';
import { useNavigate } from "react-router-dom";

const Register = () =>{

    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(pass);
    }

    return(
        <div className="body">
        <div className="formContainer">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}> 
                <label htmlFor="name">Full Name</label>
                <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Your Full Name" name="name" id="name"/> 

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" name="email" id="email"/> 

                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="******" name="password" id="password" autoComplete="true"/> 

                <button type="submit" onClick={() => {
                    navigate("/");
                }}>Login</button>
                </form>
                <button className="link-btn" onClick={() => {
          navigate("/Login");
        }}>Already have an account? Login Here.</button>
        </div>
        </div>
    )
}

export default Register;





// import React, {useState, useEffect} from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';

// const Description = (props) => {

// const [cart,setCart] = useState([]);

// const handleClick = (data) => {
//   if (cart.indexOf(data) !== -1) return;
//   setCart([...cart, data]);
// };

// const handleChange = (data, d) => {
//   const ind = cart.indexOf(data);
//   const arr = cart;
//   arr[ind].amount += d;

//   if (arr[ind].amount === 0) arr[ind].amount = 1;
//   setCart([...arr]);
// };

// let navigate=useNavigate();
// const location = useLocation();
// let id=location.state.id;

// console.log("length in description",props.data.length);
// const [data,setData] = useState([]);

//   useEffect(()=> {
//     axios({
//       method: "GET",
//       url: `https://fakestoreapi.com/products/${id}`
//     }).then(res=>{
//       //console.log(res.data);
//       setData(res.data);
//     })
//     .catch((e) => console.log(e))
//   },[]);
//   let length=props.data.length;
// //console.log(data);
//   return (
//     <>
//     <Navbar />
//     <div className='product-container'>
//       <div className='content'>
//         <div className='item'>
//         <img className='img1' src={data.image}></img>
//         </div>
//         <div className='item'>
//           <h2>Shopsite</h2>
//           <h1>{data.title}</h1>
//           <h3>{data.description}</h3>
//           <h4>{`Price: $${data.price}`}</h4>
//           <br />
//           <button className='btn1'>Buy Now</button>
//           <button 
//           onClick={()=>{
//             props.addToCartHandler(data.title)
//             navigate("/Cart", {state: {data:data}})
//             handleClick(data)
//           }
//           }
//           // ,cart:{cart}, setCart:{setCart}, handleChange:{handleChange}
//           className='btn1'>
//             Add to Cart
//             </button>
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }
// export default Description; 




// import React, {useState, useEffect} from 'react'
// import Navbar from './Navbar';
// import { useLocation } from 'react-router-dom';

//  const Cart = (props) => {

//   const location = useLocation();
// let data=location.state.data;
// console.log("data",location.state.data);
// {data, cart, setCart, handleChange }
//   // let length=location.state.len;
//   let item=location.state.data;
// console.log(data);
// const [price, setPrice] = useState(0);

// const handleRemove = (id) => {
//   const arr = cart.filter((item) => item.id !== id);
//   setCart(arr);
//   handlePrice();
// };

// const handlePrice = () => {
//   let ans = 0;
//   cart.map((item) => (ans += item.amount * item.price));
//   setPrice(ans);
// };

// useEffect(() => {
//   handlePrice();
// });
  
//   return (
//     <article>
//     <Navbar />

//     <div className='cart-box' key={item.id}>
//       <div className='cart-img'>
//         <img src ={item.image} alt="" />
//         <p>{item.title}</p>
//       </div>
//       <div>
//         <button onClick={() => handleChange(item,1)}>+</button>
//         <button>{item.amount}</button>
//         <button onClick={() => handleChange(item,-1)}>-</button>
//       </div>
//       <div>
//         <span>{item.price}</span>
//         <button onClick={() => handleRemove(item.id)}>Remove</button>
//       </div>
//     </div>

//     {/* <div className='cart-container'>
//       <div className='cart-heading'><h1>Shopping Cart</h1></div>
//       <div key={data.id} className='cart-content'>
//           <div><img 
//           src={data.image} 
//           alt="#" 
//           />
//           </div>
//           <div className='card-description'>
//               <h6>{data.title}</h6>
//               <h6>{`Price: ${data.price}`}</h6>
//               <h6>{`Category: ${data.category}`}</h6>
//             </div>
//           </div>
//     </div>
//     */}
//     <div className='total'>
//       <span>Total Price of your Cart</span>
//       <span>Rs -{price}</span>
//     </div>
//     </article >
//   );
  
// }

// export default Cart;
