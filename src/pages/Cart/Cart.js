import React, {useState, useEffect} from 'react'
import './Cart.scss'
import {CartState} from '../../context/Context';
const Cart = () => {

  const {state:{Cart},
  dispatch,
} = CartState();

const [total, setTotal] = useState(0);

useEffect(() => {
  setTotal(Cart.reduce((acc, curr)=> acc + Number(curr.price)*curr.qty, 0))
}, [Cart])

  return (
    <div className='wrap'>
      {Cart.length > 0 ? (
      Cart.map((prod) =>
       <div className='cartData'>
        <div className='cartImg'><img src={prod.image} alt={prod.name}/></div>
       <div className='prdName'>{prod.name}</div>
       <div className='price'>{prod.price}</div>
       <select className='qty' value={prod.qty}
       onChange={(e) =>
        dispatch({
          type: "CHANGE_CART_QTY",
          payload: {
            id: prod.id,
            qty: e.target.value,
          },
        })
      }
       >
        {
          [...Array(prod.inStock).keys()].map((x)=>(
            <option key={x+1}>{x+1}</option>
          ))
        }
       </select>
       <button onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}>X</button>
       </div>
      )) : (<span to="/cart" style={{textAlign:'center',display:'block', padding:'.3rem'}}>Cart is empty</span>)}
      <div className='totle'>
        <h3>Total of the {Cart.length} item</h3>
        <h3 className="Total">Rs. {total} /-</h3>
      </div>
      </div>
  )
}

export default Cart