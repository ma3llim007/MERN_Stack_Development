import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CardList, Header, Shop } from './components'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const cart = useSelector((state)=>state.cart.cartsData)
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  }
  
  return (
    <>
      <Header cartSize={cart.length} handleShow={handleShow} />
      {
        show ? <Shop /> : <CardList cart={cart} />
      }
      <ToastContainer limit={3} />
    </>
  )
}

export default App
