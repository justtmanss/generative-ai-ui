import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import TextToVisual from './components/TextToVisual';
import ImageToSound from './components/ImageToSound';
import MusicToVisual from './components/MusicToVisual';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/text-to-visual" element={<TextToVisual />} />
                    <Route path="/image-to-sound" element={<ImageToSound />} />
                    <Route path="/music-to-visual" element={<MusicToVisual />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
