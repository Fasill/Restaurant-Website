import './App.css'

import Layout from './pages/layouts/Layout.jsx';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Layout/>} >
         
          </Route>
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;