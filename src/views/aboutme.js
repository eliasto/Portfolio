/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';

export default function About() {
    const { dictionary } = useContext(LanguageContext);
    return (
<div id="aboutme" class="mt-10 mb-10 bg-right bg-cover">

	<div class="container px-10 mx-auto flex flex-wrap flex-col items-center">
		
		<div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <div class="m-auto justify-self-center place-content-center place-items-center my-4 pl-3 pr-3 pt-1 rounded-lg pb-1 text-md md:text-md text-yellow-400 bg-yellow-100 font-medium leading-tight text-center slide-in-bottom-h1">
            <span>{dictionary.aboutme}</span>
        </div>
        <div class="leading-normal text-base md:text-md mb-6 text-center slide-in-bottom-subtitle">
            <p class="mb-2">
                {dictionary.aboutmeLine1Content}
            </p>
            <p class="mb-2">
            {dictionary.aboutmeLine2Content}
            </p>
            <p class="mb-2">
            {dictionary.aboutmeLine3Content}
            </p>
        </div>  
		</div>

		
	</div>
	

</div>
    
  
    )
  }