/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function Project(prop){
    var label = [];
    for(let i = 0;i<prop.label.length;i++){
        label.push(<span class="p-1 bg-gray-200 rounded-md transition delay-150 duration-300 ease-in-out hover:bg-gray-100 mr-2">{prop.label[i]}</span>);
    }
  return (
    <div class="mt-10 mx-auto max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="h-48 w-full object-cover md:w-48" src={prop.image}></img>
      </div>
      <div class="pl-3">
        <div class="pt-4 uppercase tracking-wide text-sm text-yellow-400 font-semibold">{prop.type}</div>
        <p class="block mt-1 text-lg leading-tight font-medium text-black">{prop.title}</p>
        <p class="mt-2 text-gray-500">{prop.content}</p>
        <div class="uppercase mt-2 text-gray-500 text-xs pt-2 pb-5">
            {label}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Project;
