import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';
import Project from './components/project';
import azimoutImage from './components/assets/mockup_azimout.png';
import LVSImage from './components/assets/mockup_lvs.png';
import PATVImage from './components/assets/mockup_patv.png';
import BeendyImage from './components/assets/mockup_beendy.png';

export default function ProjectList() {
    const { dictionary } = useContext(LanguageContext);

    var labelAZimout = [dictionary.mobileappLabel, 'web design', 'restful api'];
    var labelPATV = [dictionary.mobileappLabel, dictionary.websiteLabel, 'map api'];
    var labelLVS = [dictionary.mobileappLabel, dictionary.videoserviceLabel];
    var labelBeendy = [dictionary.mobileappLabel, 'BaaS', 'graphql'];

    return (
        <React.Fragment>
      <Project title="Azimout" type={dictionary.sideProject} content={dictionary.azimoutDescription} label={labelAZimout} image={azimoutImage}/>
      <Project title="Passe A Ton Voisin" type={dictionary.clientProject} content={dictionary.patvDescription} label={labelPATV} image={PATVImage}/>
      <Project title="La Voie du Sport" type={dictionary.clientProject} content={dictionary.lvsDescription} label={labelLVS} image={LVSImage}/>
      <Project title="Beendy" type={dictionary.sideProject} content={dictionary.beendyDescription} label={labelBeendy} image={BeendyImage}/>
      </React.Fragment>
      );
    }