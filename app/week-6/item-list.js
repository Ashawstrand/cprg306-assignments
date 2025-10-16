import React from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
const [itemList, setItemList] = useState(items);
const [sortBy, setSortBy] = useState("name");


return (
    <ul className="max-w-md mx-auto mt-6">
        {items.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
    </ul>
);
};

export default ItemList;