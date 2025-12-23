"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
const CheckoutPage = ({ amount }) => {
  const stripe = useStripe();
  const Elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || Elements) {
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-white p-2 rounded-xl">
        {clientSecret && <PaymentElement />}
        <button className="px-3 py-1 bg-black">pay</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
