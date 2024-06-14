
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemList from './pages/ItemList';
import ItemEdit from './pages/ItemEdit';
import ItemDetails from './pages/ItemDetails';
import { useState, useEffect } from 'react';

interface Item {
  id: number;
  title: string;
  body: string;
}


function App() {

  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);


  return (
    <>
     <Router>
      <Routes>
      <Route path="/" element={<ItemList items={items} setItems={setItems} />} />
        <Route path="/item/:id" element={<ItemDetails items={items} setItems={setItems} />} />
        <Route path="/item/:id/edit" element={<ItemEdit items={items} setItems={setItems} />} />
      </Routes>
    </Router>
    </>
  )
}

export default App