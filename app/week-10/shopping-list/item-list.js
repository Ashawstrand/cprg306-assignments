"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect}) => {
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
  `px-4 py-2 rounded-md mr-2 cursor-pointer
${sortBy === type? "bg-blue-500 text-white hover:bg-blue-400" : "bg-gray-200 text-black hover:bg-gray-50"}`;

return (
  <div className="max-w-md mx-auto mt-6">
    <div className="mb-4 flex items-center justify-center space-x-2">
      <p className="font-bold">Sort By: </p>
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
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect(item)}
          />
        ))}
        </ul>
      </div>
);
};

export default ItemList;