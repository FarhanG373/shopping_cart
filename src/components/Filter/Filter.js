import { CartState } from '../../context/Context';
import Ratings from '../Ratings/Ratings';
import './Filter.scss'

const Filter = () => {

  const { productState: {
    byStock,
    byFastDelivary,
    byRatings,
    sort,
    searchQuery,
  }, productDispatch } = CartState();
  return (
    <div className='filter'>
      <h1>Filter</h1>
      <ul>
        <li>
          <input type={`radio`} id="asdng" name="order" onChange={(i) => 
          productDispatch({
            type:"SHORT_BY_PRICE",
            payload:"lowToHigh"
          })}
          checked={sort === 'lowToHigh' ? true : false}
          ></input>
          <label htmlFor='asdng'>Assending order</label>
        </li>
        <li>
          <input type={`radio`} id="desc" name="order" onChange={(i) => 
          productDispatch({
            type:"SHORT_BY_PRICE",
            payload:"highToLow"
          })}
          checked={sort === 'highToLow' ? true : false}></input>
          <label htmlFor='desc'>Desending order</label>
        </li>
        <li>
          <input type={`checkbox`} id="check1" onChange={(i) => 
          productDispatch({
            type:"FILTER_BY_STOCK"
          })}
          checked={byStock}></input>
          <label htmlFor='check1'>Imclude out of stock</label>
        </li>
        <li>
          <input type={`checkbox`} id="check2"  onChange={(i) => 
          productDispatch({
            type:"FILTER_BY_DELIVARY"
          })}
          checked={byFastDelivary}></input>
          <label htmlFor='check2'>Include fast delivary</label>
        </li>
        <li>
          <label>Ratings</label>
          <Ratings rating={byRatings} onClick={(i) => 
          productDispatch({
            type:"FILTER_BY_RATING",
            payload:i+1
          })
          }></Ratings>
        </li>
        <li><button  onClick={() => 
          productDispatch({
            type:"CLEAR_FILTERS"
          })}>Clear all filter</button></li>
      </ul>
    </div>
  )
}

export default Filter