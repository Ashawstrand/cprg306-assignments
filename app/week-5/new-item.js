'use client';
import { useState } from "react";

export default function NewItem() {

    //state variables for storing fields
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    //function that increases quantity
    const increment = () => {
        setQuantity((prev) => Math.min(prev + 1, 20));
    };

    //function that decreases quantity
    const decrement = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    }

    //form submission handler, prevents default form submission
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //create item object with state values
    const item = {
        name,
        quantity,
        category,
    };

    console.log("Submitted item:", item);
    alert(`Item submitted:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);


    //Reset Form to initial values
    setName("");
    setQuantity(1);
    setCategory("produce");

    return (
        <form onSubmit={handleSubmit} className="bg-white mx-auto max-w-sm mt-16 p-4 rounded shadow">
            <h2 className="text-gray-800 font-bold text-xl text-center mb-4">Add New Item</h2>
            <label className="block mb-2 text-gray-700 font-medium">Name:</label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                required
            />


        <div className="bg-white mx-auto max-w-sm mt-16 p-2 rounded">
            <label className="text-gray-800 font-bold text-xl text-center m-4">Quantity: {quantity}</label>
            <div className="flex justify-center">
            <button className="bg-purple-600 m-3 text-xl text-white h-12 w-12 rounded hover:bg-purple-400" onClick={decrement}>-</button>
            <button className="bg-blue-600 m-3 text-xl text-white h-12 w-12 rounded hover:bg-blue-500" onClick={increment}>+</button>
            </div>
            <p className="text-gray-800 text-lg text-center m-4">Allowed range: 1-20</p>

            <label className="block mb-2 text-gray-700 font-medium">Category:</label>
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded mb-6">

                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
                </select>

            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500">
                Submit Item
            </button>
        </div>
        </form>
    );
}
