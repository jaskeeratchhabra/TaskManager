import React from 'react';
import "./App.css" ; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskDetail from './components/TaskDetail';
import TaskForm from './components/TaskForm';
import Container from './components/Container'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Router> 
         <Navbar/>
          <Routes>
            <Route exact path="/" element={<Container />} />
            <Route path="/tasks/:id" element={<TaskDetail />} />
            <Route path="/edit/:id" element={<TaskForm/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
