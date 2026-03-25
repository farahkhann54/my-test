// Signup.jsx

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("✅ Signup Successful!");
    } catch (error) {
      setMessage(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-60 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80">
        <form onSubmit={handleSignup}>
          <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">Signup</h2>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-md bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
          {message && (
            <div className={`mt-5 text-center font-medium ${message.includes("Successful") ? "text-green-600" : "text-red-600"}`}>{message}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;