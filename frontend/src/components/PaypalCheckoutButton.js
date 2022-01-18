import React, { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { alternatives } from 'joi'


const PaypalCheckoutButton = (props) => {
    const { product } = props
    const [ paidFor, setPaidFor ] = useState(false)
    const [ error, setError ] = useState(null)


    const handleApprove = (orderId) =>  {       
        setPaidFor(true)
    }

    // if(paidFor) {
    //     alert("Gracias por su compra!")
    // }

    // if(error) {
    //     alert(error)
    // }

    return <PayPalButtons 
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchese_units: [
                        {
                            description: product.productos,
                            amount: {
                                price: product.price
                            }
                        }
                    ]
                })
            }}
            onApprove={async(data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order)
                handleApprove(data.orderID)
            }}
            onError={(error) => {
                setError(error)
                console.error("Paypal Checkout onError", error)
            }}
            onCancel={() => {
                
            }}
        />
}

export default PaypalCheckoutButton
