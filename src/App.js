import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom';
import Board from './components/Board';
import EditPost from './components/EditPost';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='board/:id' element={<Board/>}/>
        <Route path='editpost/:id' element={<EditPost/>}/>
        <Route path='search/:id' element={<Search/>}/>
        <Route
        path="*"
        element={<Navigate to="/" replace />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
