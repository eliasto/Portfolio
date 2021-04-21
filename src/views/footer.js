/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';
import logo from '../assets/logo.png';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function Footer(prop){
  const { dictionary } = useContext(LanguageContext);

  return (
    <footer class="text-gray-600 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <div class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img class="w-5 h-5" src={logo}></img>
    </div>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2021 {dictionary.website}
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href={dictionary.github} class="ml-3 text-gray-500">
        <img class="w-5 h-5" src={github}></img>
      </a>
      <a href={dictionary.linkedin} class="ml-3 text-gray-500">
        <img class="w-5 h-5" src={linkedin}></img>
      </a>
    </span>
  </div>
</footer>
  );
}

export default Footer;
