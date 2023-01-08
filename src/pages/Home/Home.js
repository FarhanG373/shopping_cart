import React from 'react'
import Filter from '../../components/Filter/Filter';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import { CartState } from '../../context/Context';
import './Home.scss'

const Home = () => {
  const { state: { products },
  productState: {
    byStock,
    byFastDelivary,
    byRatings,
    sort,
    searchQuery,
  }
} = CartState()
  console.log(products);

const transformProduct = () => {
  let sortedProduct  = products;
  if(sort){
    sortedProduct = sortedProduct.sort((a,b)=>(
      sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
    ));
  }
  if(!byStock) {
    sortedProduct = sortedProduct.filter((prod)=>prod.inStock)
  }
  if(byFastDelivary) {
    sortedProduct = sortedProduct.filter((prod)=>prod.byFastDelivary)
  }
  if(byRatings) {
    sortedProduct = sortedProduct.filter((prod)=>prod.rating >= byRatings)
  }
  if(searchQuery) {
    sortedProduct = sortedProduct.filter((prod)=>prod.name.toLowerCase().includes(searchQuery))
  }
  return sortedProduct;
}

  return (
    <div className='home'>
      <Filter/>
      <div className='prodContaner'>
        {
          transformProduct().map((prod) => {
            return (
              <SingleProduct prod={prod} key={prod.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Home