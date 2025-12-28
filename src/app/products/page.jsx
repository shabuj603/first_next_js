"use client"
import React from 'react'
import Image from "next/image";
import { useRouter } from 'next/navigation';
const page = () => {
    const placeOrder= () => {
        alert("Order Confirm")
        Router.push("/wallet");

    } 
    const Router = useRouter();
  return (
     <div className="group bg-white rounded-xl border shadow-sm hover:shadow-lg transition w-100 overflow-hidden">
      
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
          Sale
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold line-clamp-1">
          Smart Watch Series 9
        </h3>

        <p className="text-sm text-gray-500 line-clamp-2">
          Premium smart watch with health tracking & long battery life.
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">$120</span>
          <span className="text-sm line-through text-gray-400">$150</span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-3">
          <button onClick={placeOrder} className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>

          <button className="w-10 h-10 border rounded-lg hover:bg-gray-100">
            ❤️
          </button>
        </div>
      </div>
    </div>
  )
}

export default page