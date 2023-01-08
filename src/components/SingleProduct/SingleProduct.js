import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Ratings from '../Ratings/Ratings';
import './SingleProduct.scss'
import { CartState } from '../../context/Context';
const SingleProduct = ({ prod }) => {
  const {
    state: { Cart },
    dispatch,
  } = CartState()
  return (
    <Card>
      <Card.Img variant="top" src={prod.image} alt={prod.name} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Text>Price : {prod.price}</Card.Text>
        <Card.Text>Rating : <Ratings rating={prod.rating} /></Card.Text>
        <Card.Text>Stock : {prod.inStock}</Card.Text>
        <Card.Text>Fast delivaly : {prod.fastDelivary ? 'yes' : 'No'}</Card.Text>
        {
          Cart.some((p) => p.id === prod.id) ?
            (<Button variant="danger" onClick={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: prod
              })
            }}
              disabled={!prod.inStock}>Remove from cart</Button>) :
            (<Button variant="primary" onClick={() => {
              dispatch({
                type: "ADD_TO_CART",
                payload: prod
              })
            }} disabled={!prod.inStock}>{prod.inStock ? 'Add to cart' : 'Out of stock'}</Button>)
        }

      </Card.Body>
    </Card>
  )
}

export default SingleProduct