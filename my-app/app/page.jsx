"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "../component/CheckoutPage";

export default function Home() {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const amount = 4999;
  console.log("the stripe promished is  ", stripePromise);

  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-black pb-6 font-bold text-xl">
        Nischal Requested {amount}
      </h1>
      <Elements
        stripe={stripePromise}
        options={{
          mode: "payment",
          amount: amount,
          currency: "usd",
        }}
      >
        <CheckoutPage amount={amount}></CheckoutPage>
      </Elements>
    </div>
  );
}
