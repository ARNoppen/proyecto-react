import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { NavBar } from './components/NavBar';

  
function App() {
  return ( 
  <> 
    <BrowserRouter>
    <NavBar/> 
      <Routes>
        <Routes path="/" element={<ItemListContainer />}/>
        <Routes path="/category/" element={<ItemListContainer />}/>
        <Routes path="/item/" element={<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
    </>
    )
}

export default App
