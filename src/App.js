import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfinityScroll from './components/infinity-scroll';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header />
      <InfinityScroll />
      <Footer />
    </div>
  );
}

export default App;
