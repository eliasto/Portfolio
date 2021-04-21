/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';

export default function Projects() {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div id="projects" class="container px-10 mx-auto flex flex-wrap flex-col flex-row items-center">
		<div class="flex flex-col w-full justify-center overflow-y-hidden">
        <div class="m-auto justify-self-center place-content-center place-items-center pl-3 pr-3 pt-1 rounded-lg pb-1 text-md text-yellow-400 bg-yellow-100 font-medium leading-tight text-center lide-in-bottom-h1">
            <span>{dictionary.projects}</span>
        </div>
            <p class="mb-1 font-medium leading-normal text-base md:text-3xl text-center slide-in-bottom-subtitle">{dictionary.projectsSubtitle}</p>
		</div>	
	</div>  
    )
  }