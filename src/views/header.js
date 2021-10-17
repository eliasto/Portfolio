/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import french from '../assets/french.svg';
import english from '../assets/english.svg';
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';
import logo from '../assets/logo_text.png';

export default function Example() {

  const { dictionary } = useContext(LanguageContext);

  var flag;

  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = e => {
    if(userLanguage === 'fr'){
      userLanguageChange('en'); 
    } else {
      userLanguageChange('fr'); 
    }
  }

  if(userLanguage === 'fr'){
    flag = <button onClick={handleLanguageChange}><img className="w-6 h-6" src={english}></img></button>
  } else {
    flag = <button onClick={handleLanguageChange}><img className="w-6 h-6" src={french}></img></button>
  }
 
  return (
    <header id="page-header" className="flex flex-none items-center bg-white py-10">
    <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 container xl:max-w-7xl mx-auto px-4 lg:px-8">
      <div>
        <a className="inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-green-600 hover:text-green-400">
          <img className="opacity-75 hi-outline hi-cube-transparent inline-block h-8" src={logo}></img>
        </a>
      </div>
      <div className="flex flex-col text-center md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 ">
        <nav className="space-x-4 md:space-x-6">
          <a href="#aboutme" className="font-semibold text-gray-900 hover:text-gray-500">
            <span>{dictionary.aboutme}</span>
          </a>
          <a href="#projects" className="font-semibold text-gray-900 hover:text-gray-500">
            <span>{dictionary.projects}</span>
          </a>
          <a href="#contact" className="font-semibold text-gray-900 hover:text-gray-500">
            <span>{dictionary.contact}</span>
          </a>
          <a className="align-middle">
            <span>{flag}</span>
          </a>
        </nav>
      </div>
    </div>
  </header>
  
   

  )
}