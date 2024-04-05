import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Flights from './container/Flights/Flights';
import Home from './container/Home';
import Hotels from './container/Hotels';
import Header from './components/common/Header/Header';
import Tabs from './components/common/Header/Tabs';
import { TravelInsurance } from './container/TravelIsurance/TravelInsurance';


function App() {

  return (
    <div className='app-container'  >
      <BrowserRouter>
        <Header/>
        <div className="desktop-fights w-full mx-auto relative bg-white rounded-lg my-20" >
        <Tabs/>
        <Routes>
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/travelinsurance" element={<TravelInsurance />} />
          <Route path="/" element={<Home />} />
          <Route component={<h2>Not Found</h2>} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
