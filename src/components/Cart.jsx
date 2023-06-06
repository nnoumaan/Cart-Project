import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {

  const {cartItem} = useSelector(state=>state.cart)
  const {tax,subtotal,shipping,total} = useSelector(state=>state.cart)

  

  return (
    <div className="cart">
      <main>
       {cartItem.length > 0 ?( cartItem.map(i=>(
         <CartItem
         key={i.id}
         id={i.id}
         price={i.price}
         name={i.name}
         qty="1"
         imgSrc={i.imgSrc}
       /> 
       )
       )):(<h1>No Item Yet</h1>)}
      </main>

      {/* {
        cartItem.length > 0 ?(<CartCtn/>):''
      } */}
      <aside>
        <h2>Subtotal : $ {subtotal}</h2>
        <h2>Shipping : ${shipping}</h2>
        <h2>Tax : ${tax}</h2>
        <h2>Total : ${total}</h2>
      </aside>
    </div>
  );
};



// const CartCtn = ()=>{ 
  
//   const {tax,subtotal,shipping,total} = useSelector(state=>state.cart)

  
//   return( <aside>
//   <h2>Subtotal : $ {subtotal}</h2>
//   <h2>Shipping : ${shipping}</h2>
//   <h2>Tax : ${tax}</h2>
//   <h2>Total : ${total}</h2>
// </aside>)}


const CartItem = ({
  id,
  price,
  name,
  qty,
  imgSrc,
  increment,
  decrement,
  deletehandler,
}) => {
  

  const {cartItem} = useSelector(state=>state.cart)
  const disptach = useDispatch()

  
  return (
  <div className="cartitem">
    <img src={imgSrc} alt="" />

    <article>
      <h3>{name}</h3>
      <h3>{price}</h3>
    </article>

    <div>
      <button
        onClick={() => {
          disptach({type:'decrement',payload:id})
        }}
      >
        -
      </button>
      <p>{cartItem.map(i=>i.id === id ? i.quantity : ''  )}</p>
      <button
        onClick={() => {
          
          disptach({type:'increment',payload:id})
        }}
      >
        +
      </button>
      
    </div>
    <AiFillDelete
        onClick={() => {
          disptach({type:'delete',payload:id});
        }}
      />
  </div>
)
      }
export default Cart;
