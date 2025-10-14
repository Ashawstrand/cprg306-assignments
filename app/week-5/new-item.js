'use client';
import { useState } from "react";

export default function NewItem() {


    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");


    const increment = () => {
        setQuantity((prev) => Math.min(prev + 1, 20));
    };

    const decrement = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    }

    return (
        <div className="bg-white mx-auto max-w-sm mt-16 p-2 rounded">
            <p className="text-gray-800 font-bold text-xl text-center m-4">Quantity: {quantity}</p>
            <div className="flex justify-center">
            <button className="bg-purple-600 m-3 text-xl text-white h-12 w-12 rounded hover:bg-purple-400" onClick={decrement}>-</button>
            <button className="bg-blue-600 m-3 text-xl text-white h-12 w-12 rounded hover:bg-blue-500" onClick={increment}>+</button>
            </div>
            <p className="text-gray-800 text-lg text-center m-4">Allowed range: 1-20</p>
        </div>
    );
}
