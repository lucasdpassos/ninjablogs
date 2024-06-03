import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Post1 from './posts/Post1';
import Post2 from './posts/Post2';
import Post3 from './posts/Post3';
import Post4 from './posts/Post4';

const App = () => {
  return (
    <Router>
      <div className="flex bg-black flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts/1" element={<Post1 />} />
            <Route path="/posts/2" element={<Post2 />} />
            <Route path="/posts/3" element={<Post3 />} />
            <Route path="/posts/4" element={<Post4 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
