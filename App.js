import Product from './Components/Product'
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
   <Route path="/" element={<Header/>} ></Route>
   <Route path="/" element={<Product/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
