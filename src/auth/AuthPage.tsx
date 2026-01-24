/* import { useState } from "react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div className={`w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden flex transition-all duration-700 ${isSignup ? "flex-row-reverse" : "flex-row"}`}>

        {/* Image */
 /*      <div className="w-1/2 hidden md:block">
          <img src="/Mindweal/images/login-banner.jpg" className="h-full w-full object-fill" />
        </div>

          {/* Form */
    /*    <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">

          <div className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-blue-900">MindWeal</h1>
            <p className="text-sm text-blue-900">BY PIHU SURI</p>
            <p className="mt-2 text-sm font-semibold text-green-900">
              UNTANGLE · HEAL · THRIVE
            </p>
          </div>

          {!isSignup ? (
            <form className="space-y-5">
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Email" />
              <input type="password" className="w-full px-4 py-3 border rounded-lg" placeholder="Password" />
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg">Login</button>
            </form>
          ) : (
            <form className="space-y-5">
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Full Name" />
              <input className="w-full px-4 py-3 border rounded-lg" placeholder="Email" />
              <input type="password" className="w-full px-4 py-3 border rounded-lg" placeholder="Password" />
              <button className="w-full bg-green-600 text-white py-3 rounded-lg">Sign Up</button>
            </form>
          )}

          <p className="text-center mt-6 text-gray-600">
            {isSignup ? "Already have an account?" : "New here?"}
            <button onClick={() => setIsSignup(!isSignup)} className="ml-2 text-blue-900 font-semibold">
              {isSignup ? "Login here" : "Create an account"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
*/

import { useState } from "react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100 font-sans">
      <div
        className={`w-full max-w-6xl min-h-[500px] bg-white shadow-2xl rounded-2xl overflow-hidden flex transition-all duration-700 ${
          isSignup ? "flex-row-reverse" : "flex-row"
        }`}
      >

        {/* Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/Mindweal/images/login-banner.jpg"
            className="h-full w-full object-fill"
            alt="MindWeal Banner"
          />
        </div>

        {/* Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-white">

          {/* BRAND HEADER WITH LOGO */}
          <div className="mb-6 flex flex-col items-center">

            {/* Logo + Brand Name */}
            <div className="flex items-center gap-4">
              <img
                src="/Mindweal/images/logo.jpg"
                alt="MindWeal Logo"
                className="h-14 w-14 object-contain"
              />
              <h1 className="text-3xl font-bold text-blue-900">
                MindWeal
              </h1>
            </div>

            <p className="text-sm text-blue-900 mt-1">
              BY PIHU SURI
            </p>

            <p className="mt-2 text-sm font-semibold text-green-900 tracking-wide">
              UNTANGLE · HEAL · THRIVE
            </p>
          </div>

          {!isSignup ? (
            <form className="space-y-5">
              <input
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Password"
              />
              <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition">
                Login
              </button>
            </form>
          ) : (
            <form className="space-y-5">
              <input
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Full Name"
              />
              <input
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-full px-4 py-3 border rounded-lg"
                placeholder="Password"
              />
              <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                Sign Up
              </button>
            </form>
          )}

          <p className="text-center mt-6 text-gray-600">
            {isSignup ? "Already have an account?" : "New here?"}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="ml-2 text-blue-900 font-semibold hover:underline"
            >
              {isSignup ? "Login here" : "Create an account"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}
