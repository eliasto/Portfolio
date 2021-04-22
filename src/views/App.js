/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import illustration from '../assets/illustration.png';
import hand from '../assets/waving-hand.png';

import { LanguageContext } from './components/languages';

function App() {
	const { dictionary } = useContext(LanguageContext);

  return (
    <div className="App">
      <div class="bg-right bg-cover">
		<div class="container px-10 mx-auto flex flex-wrap flex-col md:flex-row items-center">
			<div class="flex flex-col w-full lg:w-2/5 justify-center lg:items-start overflow-y-hidden">
    			<div class="flex items-center justify-center place-items-center">
			  		<h1 class="my-4 text-3xl md:text-5xl text-yellow-300 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">{dictionary.introHero} </h1>
        			<img  src={hand} class="animate-bounce ml-2 w-10 h-10 bounce-top-icons"></img>
      			</div>
				<p class="font-medium leading-normal text-base md:text-3xl text-center md:text-left slide-in-bottom-subtitle">{dictionary.titleHero}</p>
      			<p class="leading-normal text-base md:text-xl mb-6 text-center md:text-left slide-in-bottom-subtitle">{dictionary.subtitleHero}</p>
				<p class="text-yellow-300 font-bold text-center md:text-left fade-in">{dictionary.subphraseHero}</p>
				<div class="flex w-full justify-center md:justify-start lg:pb-0 fade-in">
					<a href={dictionary.linkedin}><img src={linkedin} class="h-12 pr-4 bounce-top-icons w-10 h-10"></img></a>
					<a href={dictionary.github}><img src={github} class="h-12 pr-4 bounce-top-icons w-10 h-10"></img></a>
				</div>
			</div>
			<div class="w-full lg:w-3/5 overflow-y-hidden">
				<img class="mx-auto lg:mr-0 slide-in-bottom" src={illustration}></img>
			</div>
		</div>
	  </div>
    </div>
  );
}

export default App;
