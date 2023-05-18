import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
// import Slider from './components/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
      {/* <Slider/> */}
    </div>
  );
}

export default App;
