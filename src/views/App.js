/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import illustration from '../assets/illustration_wide.png';

import { LanguageContext } from './components/languages';

function App() {
	const { dictionary } = useContext(LanguageContext);

  return (

 <div className="flex flex-col lg:flex-row-reverse space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 ">
 <div className="lg:w-1/2 lg:flex lg:items-center">
   <div>
	 <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-green-700 bg-green-200">
	   {dictionary.introHero}
	 </div>
	 <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
	 {dictionary.titleHero}
	 </h2>
	 <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
	 {dictionary.subtitleHero}
	 </h3>
	 <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href={dictionary.github} className="text-gray-500">
        <img className="w-5 h-5" src={github}></img>
      </a>
      <a href={dictionary.linkedin} className="ml-3 text-gray-500">
        <img className="w-5 h-5" src={linkedin}></img>
      </a>
    </span>
	 <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
	   <a href="#contact" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-6 py-4 leading-6 rounded border-green-700 bg-green-700 text-white hover:text-white hover:bg-green-800 hover:border-green-800 focus:ring focus:ring-green-500 focus:ring-opacity-50 active:bg-green-700 active:border-green-700">
		 <span>{dictionary.contact}</span>
		 <svg className="hi-outline hi-chat inline-block w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>          </a>
	 </div>
   </div>
 </div>
 <div className="lg:w-1/2 lg:mr-16 lg:flex lg:justify-center lg:items-center">
   <div className="lg:w-96 relative">
	 <div className="absolute pattern-dots-xl text-green-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3"></div>
	 <div className="absolute pattern-dots-xl text-green-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3"></div>
	 <div className="absolute rounded-full top-0 right-0 w-32 h-32 bg-green-200 bg-opacity-50 -mt-12 -mr-12"></div>
	 <div className="absolute rounded-xl bottom-0 left-0 w-32 h-32 bg-blue-200 bg-opacity-50 -mb-10 -ml-10 transform rotate-3"></div>
	 <img src={illustration} className="relative rounded-lg mx-auto" />
   </div>
 </div>
</div>

  );
}

export default App;
