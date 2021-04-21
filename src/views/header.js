/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import french from '../assets/french.svg';
import english from '../assets/english.svg';
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';

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
    flag = <button onClick={handleLanguageChange}><img class="w-6 h-6" src={english}></img></button>
  } else {
    flag = <button onClick={handleLanguageChange}><img class="w-6 h-6" src={french}></img></button>
  }
 
  return (
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <div class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {flag}  
    </div>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href="#aboutme" class="mr-5 hover:text-gray-900">{dictionary.aboutme}</a>
      <a href="#projects" class="mr-5 hover:text-gray-900">{dictionary.projects}</a>
      <a href="#contact" class="mr-5 hover:text-gray-900">{dictionary.contact}</a>
    </nav>
  </div>
</header>

  )
}