"use client";

import React, { useState } from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
const [sortBy, setSortBy] = useState("name");

//sorted copy of items array.
const sortedItems = [...items].sort((a, b) => {
  if (sortBy === "name") {
    return a.name.localeCompare(b.name);
  }
  else if (sortBy === "category") {
    return a.category.localeCompare(b.category);
  }
  return 0;
});

const getButtonStyle = (type) =>
  `px-4 py-2 rounded-md mr-2
${sortBy === type? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`;

return (
  <div className="max-w-md mx-auto mt-6">
    <div className="mb-4 flex justify-center">
      <button className={getButtonStyle("name")}
      onClick={() => setSortBy("name")}>
        Name
      </button>
      <button className={getButtonStyle("category")}
      onClick={() => setSortBy("category")}>
        Category
      </button>
    </div>
    <ul className="max-w-md mx-auto mt-6">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
        </ul>
      </div>
);
};

export default ItemList;