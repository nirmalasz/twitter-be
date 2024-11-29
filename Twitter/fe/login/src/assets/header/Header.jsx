import React from "react";

export default function Header() {
  return (
    <header className="flex items-center p-4 text-white">
      <img src="/public/yourlogo.png" alt="Logo" className="h-8 w-8 mr-2" />
      <h1 className="text-xl font-bold">Name</h1>
    </header>
  );
}