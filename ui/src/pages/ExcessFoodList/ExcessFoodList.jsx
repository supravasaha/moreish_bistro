// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import { useEffect, useState } from "react";

// const stripePromise = loadStripe(
//   "pk_test_51PcorvRxWU6Ys7rIYE5cW3AC91JYyyLJhiTidwn3q8Gbi8ZrDiuGNYcsLgVQe7FZPwgl8MiHlArppXsNj0xwKagb00XTSWlDbW"
// );
// const ExcessFoodList = () => {
//   const [foods, setFoods] = useState([]);
//   const [selectedFood, setSelectedFood] = useState(null);

//   useEffect(() => {
//     const fetchFoods = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:4000/api/excess-food"
//         );
//         setFoods(response.data);
//       } catch (error) {
//         console.error("Error fetching excess foods:", error);
//       }
//     };

//     fetchFoods();
//   }, []);

//   const handleOrder = async (food) => {
//     setSelectedFood(food);
//     const stripe = await stripePromise;

//     try {
//       const response = await axios.post(
//         "http://localhost:4000/api/payment/create-checkout-session",
//         {
//           foodId: food._id,
//           foodName: food.name,
//           price: food.price,
//           quantity: 1,
//         }
//       );

//       const { sessionId } = response.data;
//       await stripe.redirectToCheckout({ sessionId });
//     } catch (error) {
//       console.error("Error processing payment:", error);
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Excess Foods</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {foods.map((food) => (
//           <div key={food._id} className="p-4 border rounded shadow-md">
//             <img
//               src={food.foodImage}
//               alt={food.name}
//               className="w-full h-40 object-cover mb-2"
//             />
//             <h3 className="text-xl font-semibold">{food.name}</h3>
//             <p className="text-gray-600">Quantity: {food.quantity}</p>
//             <p className="text-gray-600">Price: ${food.price}</p>
//             <p className="text-gray-600">{food.description}</p>
//             <button
//               onClick={() => handleOrder(food)}
//               className="bg-green-500 text-white py-2 px-4 rounded mt-4"
//             >
//               Place Order
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ExcessFoodList;
