import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar/>}>
              <Route  index element={<HomePage />} />
              {/* <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/properties/:id" element={<PropertyPage />} />
              <Route path="/seller-dashboard" element={<SellerDashboardPage/>} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
  );
}

export default App;
