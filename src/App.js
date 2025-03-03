import { useContext } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import { ThemeContext } from './context/ThemeContext';

import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Research from "./Pages/Research";
import Members from './Pages/Members';
import Contact from './Pages/Contact';
import Publications from './Pages/Publications';

function App() {

  const {darkMode} = useContext(ThemeContext);

  return (
    <Router>
      <div className={`${darkMode ? "AppDark" : "App"}`}>
        <div className="header">
          <Navbar />
          <div className='placeHolder'></div>
        </div>
        <div className={`${darkMode ? "bodyDark" : "body"}`}>
          <Routes>
            <Route path='/*' Component={Home} />
            <Route path='/research' Component={Research} />
            <Route path='/publications' Component={Publications} />
            <Route path='/members/*' Component={Members} />
            <Route path='/contact' Component={Contact} />
            {/* <Route path='/positions' Component={Test} /> */}
          </Routes>
        </div>
        <div className='credit'>Made by Roei</div>
      </div>
    </Router>
  );
};

export default App;
