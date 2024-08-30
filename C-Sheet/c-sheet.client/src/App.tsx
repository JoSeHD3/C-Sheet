import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, WeatherForecast, CharacterList } from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/weather" element={<WeatherForecast />} />
            <Route path="/characters" element={<CharacterList />} />
            <Route path="/characters/new" element={<div>Character Creation Page</div>} />
            <Route path="/characters/:id" element={<div>Character Details Page</div>} />
    </Routes>
  </Router>
);

export default App;
