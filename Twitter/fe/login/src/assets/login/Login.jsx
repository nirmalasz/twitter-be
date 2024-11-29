import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[600px] sm:h-[900px]">
        <h1 className="text-white text-3xl font-bold mb-6">
            Welcome!
        </h1>
        <form>
            <div className="space-y-4 w-full max-w-xs">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 rounded-xl" required/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-xl" required/>
            </div>
            <button onClick={handleLogin} className="mt-8 block w-32 px-4 py-2 bg-blue-600 text-white font-bold rounded-xl mx-auto hover:bg-blue-400 hover:text-gray-200">
                Login
            </button>
            <p className="text-center mx-auto mt-4 text-white">
                Don't have an account?&nbsp; 
                <a href="/register" className="text-blue-400 hover:underline">
                    Register
                </a>
            </p>
        </form>
    </div>
  );
}