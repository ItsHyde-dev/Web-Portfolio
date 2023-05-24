import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './components/contact-page/contact-page';
import Home from './components/home/homepage';
import NotFoundPage from './components/not-found/not-found-page';
import ProjectPage from './components/projects/projects';
import Crazy from './components/crazy/crazy';
import './app.css'
import NodeRestApiTestPage from './components/code-test-pages/node-rest-api/node-rest-api-test-page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects">
                        <Route index element={<ProjectPage />} />
                        <Route path="/projects/nodeApiTest" element={<NodeRestApiTestPage />} />
                    </Route>
                    <Route path="/crazy" element={<Crazy />} />
                    <Route path="*" element={<NotFoundPage />} />
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
