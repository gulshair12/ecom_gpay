import stripePackage from "stripe";

const stripe = stripePackage(process.env.STRIPE_SECRET_KEY);

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { paymentMethodId, amount } = JSON.parse(event.body);

    // Log received data for debugging
    console.log(
      `Received amount: ${amount}, paymentMethodId: ${paymentMethodId}`
    );

    // Create a PaymentIntent with the amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method: paymentMethodId,
      confirmation_method: "manual",
      confirm: true, // Immediately confirm the PaymentIntent
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, paymentIntent }),
    };
  } catch (error) {
    console.error("Error creating payment intent:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
