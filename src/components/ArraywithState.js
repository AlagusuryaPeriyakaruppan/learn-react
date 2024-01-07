import React, { useState } from "react";

const ArraywithState = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 10 + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={handleAddItem}>Add Item</button>
      {items.map((item) => (
        <li key={item.id}>{item.value}</li>
      ))}
    </div>
  );
};

export default ArraywithState;
