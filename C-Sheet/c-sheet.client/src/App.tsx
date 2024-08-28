import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, WeatherForecast } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<WeatherForecast />} />
    </Routes>
  </Router>
);

export default App;
