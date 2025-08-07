import { useState } from 'react';
import Header from './components/Header';
import GroceryList from './components/GroceryList';
import Footer from './components/Footer';
import Form from './components/Form';

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItems(item) {
    setItems([...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item));
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItems} />
      <GroceryList items={items} onDeleteItem={handleDeleteItems} onToggleItem={handleToggleItem} onClearItems={handleClearItems} />
      <Footer items={items} />
    </div>
  );
}