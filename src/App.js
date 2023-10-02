import { Route, Routes } from 'react-router-dom';
import  Navbar  from './pages/Navbar';
import  Home  from './pages/Home';
import  Buy  from './pages/Buy';
import  Rent  from './pages/Rent';
import './custom-scrollbar.css';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" element={<Rent />} />
        </Routes>
      </div>
   </>
  );
}

export default App;
