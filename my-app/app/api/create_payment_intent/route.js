import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const { amount } = await NextRequest.json();
    const paymentIntent = await stripe.paymentIntent.create({
      amount: amount,
      currency: "usd",
      automatic_payment_method: { enabled: true },
    });
    return NextResponse.json({ clientSecret: paymentIntent });
  } catch (error) {
    return NextResponse.json({ error: `internal sertver error ${error}` });
  }
}
