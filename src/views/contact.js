/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';

function Contact(prop){
  const { dictionary } = useContext(LanguageContext);
  const mail = 'mailto:'+dictionary.mail+'';

  return (
   <div id="contact" class="container mt-10 md:px-20 ">
       <div class="shadow-md bg-blue-50 p-10 mb-10 rounded-xl flex flex-col w-full justify-center overflow-y-hidden">
       <h2 class="pt-4 uppercase text-center tracking-wide text-3xl text-yellow-400 font-semibold">{dictionary.contactTitle}</h2>
       <p class="pb-10 text-center tracking-wide text-sm text-gray-700 font-medium">{dictionary.contactSubtitle}</p>
       <a href={mail} class="m-auto justify-self-center place-content-center place-items-center pl-3 pr-3 pt-1 rounded-lg pb-1 text-xl text-yellow-400 bg-yellow-100 font-medium leading-tight text-center lide-in-bottom-h1">{dictionary.mail}</a>
       </div>
   </div>
  );
}

export default Contact;
