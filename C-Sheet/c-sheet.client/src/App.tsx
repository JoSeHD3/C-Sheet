import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, WeatherForecast, CharacterList } from './pages';
import { CreateCharacter } from './components/characters/CreateCharacter';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather" element={<WeatherForecast />} />
      <Route path="/characters" element={<CharacterList />} />
      <Route path="/characters/new" element={<CreateCharacter />} />
      <Route
        path="/characters/:id"
        element={<div>Character Details Page</div>}
      />
    </Routes>
  </Router>
);
export default App;
