import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Device from './pages/Device.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/:device/:channel' element={<Device />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
