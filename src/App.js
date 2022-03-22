// import logo from './logo.svg';
import './App.css';
// import react,{useSate} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    // document.body.classList.remove('bg-danger')
    // document.body.classList.remove('bg-danger')
  }
  const toggleMode = (cls) => {
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if (Mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark Mode Enabled", "success")
      document.title = "Text Utils - Dark Mode"
      setInterval(() => {
        document.title = "Install Text Utiles Now"
      }, 1000);
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled", "success")
      document.title = "Text Utils - light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Pratham" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={Mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter your text Here Bro" mode={Mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

// Hey kid remember that react remove any external html that you may pass through a variable in jsx file 
