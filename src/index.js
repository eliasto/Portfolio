import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import Header from './views/header';
import About from './views/aboutme';
import Projects from './views/projects';

import Contact from './views/contact';
import Footer from './views/footer';

import { LanguageProvider } from './views/components/languages';
import ProjectList from './views/projectsList';

ReactDOM.render(

  <React.StrictMode>
    <LanguageProvider>
    <Header />
    <App />
    <About />
    <Projects />
    <ProjectList />
    <Contact />
    <Footer />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
