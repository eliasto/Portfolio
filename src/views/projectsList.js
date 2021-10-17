import React, { useContext } from 'react';
import { LanguageContext } from './components/languages';
import Project from './components/project';
import azimoutImage from './components/assets/mockup_azimout-min.png';
import LVSImage from './components/assets/mockup_lvs-min.png';
import PATVImage from './components/assets/mockup_patv-min.png';
import BeendyImage from './components/assets/mockup_beendy-min.png';
import OctoroleImage from './components/assets/octorole.png';

export default function ProjectList() {
    const { dictionary } = useContext(LanguageContext);

    var labelAZimout = [dictionary.mobileappLabel, 'web design', 'restful api'];
    var labelPATV = [dictionary.mobileappLabel, dictionary.websiteLabel, 'map api'];
    var labelLVS = [dictionary.mobileappLabel, dictionary.videoserviceLabel];
    var labelBeendy = [dictionary.mobileappLabel, 'BaaS', 'graphql'];
    var labelOctorole = ["Rest API", "Dashboard", "Paypal API"]

    return (
        <React.Fragment>
      <Project title="Azimout" type={dictionary.sideProject} content={dictionary.azimoutDescription} label={labelAZimout} image={azimoutImage}/>
      <Project title="Passe A Ton Voisin" type={dictionary.clientProject} content={dictionary.patvDescription} label={labelPATV} image={PATVImage}/>
      <Project title="La Voie du Sport" type={dictionary.clientProject} content={dictionary.lvsDescription} label={labelLVS} image={LVSImage}/>
      <Project title="Beendy" type={dictionary.sideProject} content={dictionary.beendyDescription} label={labelBeendy} image={BeendyImage}/>
      <Project title="Octorole" type={dictionary.sideProject} content={dictionary.octoroleDescription} label={labelOctorole} image={OctoroleImage}/>
      </React.Fragment>
      );
    }