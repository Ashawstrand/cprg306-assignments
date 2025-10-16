import React from 'react';
import Item from './item';
import items from './items.json';

const ItemList = () => {
const [itemList, setItemList] = useState(items);
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