import React from "react";
import Link from "next/link";
import { Search, Bell, Heart, ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center py-5 px-2 border-b-2 border-gray-300">
      <div className="flex justify-center items-center gap-6">
        <h2 className="text-2xl font-bold">Shopz</h2>
        <ul className="flex justify-evenly items-center gap-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/man">Man</Link>
          <Link href="/woman">Woman</Link>
          <Link href="/kids">Kids</Link>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Search className="w-5 h-5" />
        <Bell className="w-5 h-5" />
        <Heart className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
