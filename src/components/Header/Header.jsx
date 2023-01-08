import React, {useState} from 'react'
import './Header.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import {CartState} from '../../context/Context';
const Header = () => {
  const[Open, isOpen] = useState(false);
  const {state:{Cart},
  dispatch,
  productDispatch,
} = CartState();
  return (
    <div className={`navBar ${Open ? 'active' : 'deActive'}`}>
      <button onClick={()=>isOpen(!Open)} className="mobIcon">Menu</button>
      <div className='logo'><Link to="#">Logo</Link></div>
      <form>
        <label for="search" className='sr-only d-none'>search</label>
        <input id='search' type={`search`} placeholder="Search" 
        onChange={(e)=>{
          productDispatch({
            type:'FILTER_BY_SEARCH',
            payload:e.target.value
          })
        }}
        ></input>
      </form>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Nav Links</Link></li>
        <li><Link to="/">Nav Links</Link></li>
        <li><Link to="/">Nav Links</Link></li>
        <li className='cartIcon'> <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        cart item {Cart.length}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {Cart.length > 0 ? (
          Cart.map((prod) =>
           <div className='cartData'>
            <div className='cartImg'><img src={prod.image} alt={prod.name}/></div>
           <div className='prdName'>{prod.name}</div>
           <div className='price'>{prod.price}</div>
           <button onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:prod})}}>X</button>
           </div>
          )) : (<span to="/cart" style={{textAlign:'center',display:'block', padding:'.3rem'}}>Cart is empty</span>)}
        {Cart.length > 0 ? (<Link to="/cart" style={{textAlign:'center',display:'block', background:"#333",padding:'.3rem',color:'#fff'}}>Go to cart</Link>) : ""}
      </Dropdown.Menu>
    </Dropdown></li>
      </ul>
      
    </div>
  )
}

export default Header