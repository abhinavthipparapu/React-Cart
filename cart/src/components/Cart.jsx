import React from 'react';
import {Redirect} from 'react-router-dom'

function Cart(props) {
    console.log(props)

    const { app } = props
    const cart = app.getTheCartArray()
    const isAuth = app.isAuthentication()
    if(!isAuth){
        alert("first login")
        return <Redirect to = "/login"/>
    }
    return (
        <div>
            {
                cart.map(item => {
                    return (
                        <div key={item.id} style={{ border: "1px solid black", width: 200, margin: 10 }}>
                            <div>
                                <img src={item.img} />
                                <p>Name:{item.name}</p>
                                <p>Price:{item.price}</p>
                                <p>Qty:{item.qty}</p>
                            </div>
                        </div>
                    )

                })
            }

        </div>
    );
}

export default Cart;