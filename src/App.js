import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Table from './Components/Tabel';

function App() {
  const [data, setData] = useState([]);
  const handleNewItem = (newItem) => {
    setData([...data, newItem]);
  };

  return (
    <div className="App">
      <Form onSubmit={handleNewItem}/>
      <Table data={data} />
    </div>
  );
}

export default App;
