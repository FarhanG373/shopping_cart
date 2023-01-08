import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
function App() {
  return (
    <div className="App">

https://www.youtube.com/watch?v=HptuMAUaNGk ------------------------ 53:11
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
