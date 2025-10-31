import React from 'react';

const Item = ({name, quantity, category, onSelect}) => {
    return (
      <li className="bg-black border border-white rounded-md p-4 mb-2"
          onClick={() => onSelect && onSelect({name, quantity, category})}
      >
        <div className="text-lg font-semibold text-white">{name}</div>
        <div className="mt-1 text-sm text-white">Quantity: {quantity}</div>
        <div className="text-sm text-white">Category: {category}</div>
      </li>
    );
};


export default Item;