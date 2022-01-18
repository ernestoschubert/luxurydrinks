import React, { useState, useEffect, useContext } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { DataContext } from '../DataProvider';


const PaypalCheckoutButton = () => {
    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [total] = value.total
    const [success, setSuccess] = useState(false)
    const [orderID, setOrderID] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    console.log("total calculado:",total)

    useEffect(() => {
        PaypalCheckOut()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carrito])

    const initialOptions = {
        "client-id": "ASLnF48B0KcpHc6l8x3IoDViKPYG2jMRnLDR7H_vUO9pjOQtmhZlajrjXlzlmMDVG_sFCSuS5gO47eBT",
        currency: "USD",
        intent: "capture",
    }

    const createOrder= (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: total,
                    }
                }
            ]
        });
    }
    const onApprove = (data, actions) => { 
        console.log(data)
      return actions.order.capture()
      .then(function (details) {
          const { payer } = details;
          setSuccess(true);
          console.log('Capture result', details, JSON.stringify(details, null, 2));
                  var transaction = details.purchase_units[0].payments.captures[0];
                  alert('Transaction '+ transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
          console.log(details)
          setOrderID(transaction.id)
      });  
    };
    const onError = (error) => {
        setErrorMessage(error)
        console.error("Paypal Checkout onError", errorMessage)
    }
    const onCancel = (data) => {
        console.log("Usted a cancelado el checkout", data)
    }
    const PaypalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons 
                    style={{shape: 'pill', label: 'paypal'}}
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />
            </PayPalScriptProvider>
        )
    }
    return <PaypalCheckOut />
}

export default PaypalCheckoutButton
