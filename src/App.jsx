

import Login from "./Final/Login_Signup/Login";
import Signup from "./Final/Login_Signup/Signup";
import Redux from "./Final/Redux/Redux";
import Checkout from "./Final/Stripe/Checkout";
import { Elements } from "@stripe/react-stripe-js";


import { loadStripe } from "@stripe/stripe-js";

function App() {
  const stripePromise = loadStripe("pk_test_51T0dWURue4BZmvjOzo8z6NXBU92jFFCmtWMVDujWEa2LuP5U4leStZaXiOJsgXrUaJSwLNnLHyOjVt8fyoXdbP0q00kISO6ECo");
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-2 pt-12">
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex-1 max-w-xs">
          <Login />
        </div>
        <div className="flex-1 max-w-xs">
          <Signup />
        </div>
        <div className="flex-1 max-w-xs">
          <Redux />
        </div>
        <div className="flex-1 max-w-sm">
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default App;
