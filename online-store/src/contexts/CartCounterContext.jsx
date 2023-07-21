import React, { useContext, useState } from 'react'

const CartCounterContext = React.createContext()

export const CartCounterProvider = ({ children }) => {
  const [productOnCart, setProductOnCart] = useState([])

  return (
    <CartCounterContext.Provider value={{ productOnCart, updateProductOnCart: setProductOnCart }}>
      {children}
    </CartCounterContext.Provider>
  )
}

export const useCartCounter = () => {
  const { productOnCart, updateProductOnCart } = useContext(CartCounterContext)
  return { productOnCart, updateProductOnCart }
}