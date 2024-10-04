import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b2750';
      showAlert("Enable Dark Mode","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enable Light Mode","success");
    }
  }
  return (
    
<>

<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}  />
<Alert alert={alert}/>

<div className="container my-3">

 <TextForm heading="Enter the Text to Analyse" showAlert={showAlert} mode={mode}/>
</div>

    </>
  );
}

export default App;
