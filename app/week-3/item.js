import React from 'react';

const Item = ({name, quantity, category}) => {
    return (
      <li className="bg-white shadow-md rounded-md p-4 mb-2 hover:bg-gray-50">
        <div className="text-lg font-semibold text-gray-800">{name}</div>
        <div className="mt-1 text-sm text-gray-600">Quantity: {quantity}</div>
        <div className="text-sm text-gray-600">Category: {category}</div>
      </li>
    );
};


export default Item;