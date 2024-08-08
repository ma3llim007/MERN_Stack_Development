import { useState } from 'react'
import Header from './components/Header'
import Shop from './components/Shop';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CardList from './components/CardList';

function App() {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const handleAddToCart = (data) => {
    let isPrevent = false;
    cart.forEach(item => {
      if (item.id === data.id) {
        isPrevent = true;
      }
    });
    if (!isPrevent) {
      setCart([...cart, data])
      toast.success('Item is Add To Cart', {
        position: "bottom-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
    } else {
      toast.error('Item Is Already In Cart', {
        position: "bottom-center",
        autoClose: 1300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  const handleShow = () => {
    setShow(!show);
  }

  const increamentQty = (id) => {
    let updateCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item
      }
    });
    setCart(updateCart);
  }
  const decreamentQty = (id) => {
    let updateCart = cart.map((item) => {
      if (item.id === id) {
        if (item.amount > 1) {
          return { ...item, amount: item.amount - 1 }  
        } else {
          return item;
        }
      } else {
        return item;
      }
    });
    setCart(updateCart)
  }


  return (
    <>
      <Header cartSize={cart.length} handleShow={handleShow} />
      {
        show ? <Shop handleAddToCart={handleAddToCart} /> : <CardList cart={cart} increamentQty={increamentQty} decreamentQty={decreamentQty} />
      }
      <ToastContainer limit={3} />
    </>
  )
}

export default App;