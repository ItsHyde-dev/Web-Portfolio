import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './components/contact-page/contact-page';
import Home from './components/home/homepage';
import ProjectPage from './components/projects/projects';

function App() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Home />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/projects" element={<ProjectPage />} />
                    </ Route>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
