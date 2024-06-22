import React from 'react';
import gambar from './assets/CatMLBB.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">ZAIN</h1>
      </header>
      <main className="main-content">
        <img src={gambar} alt="neko" className="cat-image" />
      </main>
      <footer className="footer">
        <p>© 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default App;
