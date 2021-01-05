import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
const buttonStyles = {
    fontSize: "13px",
    textAlign: "center",
    color: "#000",
    padding: "12px 60px",
    boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
    backgroundColor: "rgb(255, 178, 56)",
    borderRadius: "6px",
    letterSpacing: "1.5px",
}
const buttonDisabledStyles = {
    opacity: "0.5",
    cursor: "not-allowed",
}
let stripePromise
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe("pk_test_51I07ikH7J1bcIl97EX7OG22NQRBb7EdoDAraGDEHuAZZUKLWFW5h3Z7EoEmE239mNGh1MIHk1NB2LiBfJ391mex5008P16XTsB")
    }
    return stripePromise
}
const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const redirectToCheckout = async event => {
        event.preventDefault()
        setLoading(true)
        const stripe = await getStripe()

        const response = await fetch('http://localhost:4242/create-checkout-session', {method: 'POST'});
        const session = await response.json()

        const { error } =  await stripe.redirectToCheckout({
            sessionId: session.id
        })
        if (error) {
            console.warn("Error:", error)
            setLoading(false)
        }
    }
    return (
        <button
            disabled={loading}
            style={
                loading ? { ...buttonStyles, ...buttonDisabledStyles } : buttonStyles
            }
            onClick={redirectToCheckout}
        >
            BUY MY BOOK
        </button>
    )
}
export default Checkout