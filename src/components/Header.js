import React, { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'

const showOrders = (props) => {
    let summa = 0
    props.orders.forEach(el => summa += Number.parseFloat(el.price));
    return (
        <div>
            {props.orders.map(el => (<Order key={el.id} item={el} onDelete={props.onDelete}/>))}
            <p className='summa'>Summa: {new Intl.NumberFormat().format(summa)}</p>            
        </div>
    )
}

const showNothing = () => {
    return (<div className='empty'><h2>There are no products</h2></div>)    
}


export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)
    return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
                <li>About</li>
                <li>Contacts</li>
                <li>Cabinet</li>
            </ul>
            <FaShoppingCart className={`shop-cart-button ${cartOpen && 'active'}`} 
            onClick={() => setCartOpen(cartOpen = !cartOpen)}/>

            {cartOpen && (
               <div className='shop-cart'>
                    {props.orders.length > 0 ? showOrders(props) : showNothing()}
               </div>)}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
