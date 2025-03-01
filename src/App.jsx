import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      </Route>
      </Routes>
    </Router>
  )
}

export default App
