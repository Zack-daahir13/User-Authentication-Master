import React, { useState } from 'react';
import './App.css';
import Login from './assets/components/Login';  // sax path-ka Login.jsx
import Signup from './assets/components/Signup';  // sax magaca iyo path-ka

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      <div className="overlay"></div> {/* Overlay background image iyo shucaaca */}
      <div className="form-container">
        {isLogin ? <Login /> : <Signup />}
        <button className="toggle-btn" onClick={toggleForm}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </button>
      </div>
    </div>
  );
}

export default App;
