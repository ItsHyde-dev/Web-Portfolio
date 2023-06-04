import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/homepage';
import NotFoundPage from './components/not-found/not-found-page';
import ProjectPage from './components/projects/projects';
import Crazy from './components/crazy/crazy';
import './app.css'
import NodeRestApiTestPage from './components/code-test-pages/node-rest-api/node-rest-api-test-page';
import GoRestApiTestPage from './components/code-test-pages/go-rest-api/go-rest-api-test-page';
import AboutPage from './components/about-page/about-page';
import ContactPage from './components/contact-page/contact-page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/projects">
                        <Route index element={<ProjectPage />} />
                        <Route path="/projects/nodeApiTest" element={<NodeRestApiTestPage />} />
                        <Route path="/projects/golang-rest-api" element={<GoRestApiTestPage />} />
                    </Route>
                    <Route path="/crazy" element={<Crazy />} />
                    <Route path="*" element={<NotFoundPage />} />
                </ Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
