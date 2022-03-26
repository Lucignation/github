import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import SearchResult from './pages/SearchResult/SearchResult';
import { UseSearchContext } from './Context/SearchContext';

import './App.scss';

function App() {
  return (
    <UseSearchContext>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:user' element={<SearchResult />} />
        </Routes>
      </Router>
    </UseSearchContext>
  );
}

export default App;
