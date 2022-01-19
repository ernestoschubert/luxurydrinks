import React, { useState, useEffect, useContext } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { DataContext } from '../DataProvider';
import Swal from 'sweetalert2';


const PaypalCheckoutButton = () => {
    const value = useContext(DataContext);
    const [carrito] = value.carrito;
    const [total] = value.total
    const [success, setSuccess] = useState(false)
    const [orderID, setOrderID] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        PaypalCheckOut()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [carrito])

    const Alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        background: 'black',
        color: 'white',
        timerProgressBar: true,
        didOpen: toast => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

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
        return actions.order.capture()
            .then(function (details) {
                const { payer } = details;
                setSuccess(true);
                var transaction = details.purchase_units[0].payments.captures[0];
                Alert.fire({
                    icon: 'success',
                    title: 'Transacción '+ transaction.status + ': ' + transaction.id
                })
                setOrderID(transaction.id)
            });  
    };
    const onError = (error) => {
        setErrorMessage(error)
        console.error("Paypal Checkout onError", errorMessage)
    }
    const onCancel = (data) => {
        Alert.fire({
            icon: 'warning',
            title: "Usted a cancelado el checkout", data
          })
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
