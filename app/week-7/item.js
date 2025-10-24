import React from 'react';

const Item = ({name, quantity, category}) => {
    return (
      <li className="bg-black border border-white rounded-md p-4 mb-2">
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="mt-1 text-sm text-white">Quantity: {quantity}</div>
        <div className="text-sm text-white">Category: {category}</div>
      </li>
    );
};


export default Item;