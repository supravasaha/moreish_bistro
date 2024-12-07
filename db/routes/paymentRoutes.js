import express from "express";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECERT_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const { foodId, foodName, price, quantity } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: foodName,
            },
            unit_amount: price * 100,
          },
          quantity,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5174/success", // Replace with your success page
      cancel_url: "http://localhost:5174/cancel", // Replace with your cancel page
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res
      .status(500)
      .json({ message: "Failed to create checkout session", error });
  }
});

export default router;
