import './InfoBox.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'
import koryokuLogo from '../img/KorYokuLOGO.png'
import koryokuScreen from '../img/KorYokuSCREEN.png'
import koryokuChrome from '../img/KorYokuChromeSCREEN.png'
import oliversEnglishLogo from '../img/OliversEnglishLOGO.png'
import oliversEnglishScreen from '../img/OliversEnglishSCREEN.png'

function Projects() {
  const [expandOne, setExpandOne] = useState(true)
  const [expandTwo, setExpandTwo] = useState(true)
  const [expandThree, setExpandThree] = useState(true)

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Projects  &nbsp;&nbsp;<FontAwesomeIcon icon={faFolder} /></h1>
      </div>
      <p className="infoText" >Here is a showcase of some of my on going and previous projects. If you want a more comprehensive breakdown of all my previous work take a look at my GitHub page. 
        <br />
        <a href="https://github.com/Oliver343">https://github.com/Oliver343</a>
      </p>
      <br />
      <div className="infoText">
        <button className="projectButton" onClick={() => {setExpandOne(!expandOne); setExpandTwo(true); setExpandThree(true)}}><img height="40px" src={koryokuLogo}/> - Productivity tracker with chrome extension &nbsp; <FontAwesomeIcon icon={expandOne ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <br />
        <div className="infoText" hidden={expandOne}>
          <img className="projectImg" src={koryokuScreen} />
          <img className="projectImg" src={koryokuChrome} />
          <br />
          KorYoku is an opensource project I have created with a team of developers. It provides a productivity tracker that works alongside a chrome extension in order to track the URL the user is viewing in the current tab. Using the onActivated listener, it will detect tab changes and send this to a backend that can then display this data to the user via the website. 
          <br />
          <br />
          You can view the repo for the KorYoku website here: 
          <br />
          <a href="https://github.com/Oliver343/EU-PT-13-Oliver-Sanderson-Productivity-Tracker-Final">https://github.com/Oliver343/EU-PT-13-Oliver-Sanderson-Productivity-Tracker-Final</a>
          <br />
          <br />
          You can view the repo for the KorYoku chrome extension here: 
          <br />
          <a href="https://github.com/Oliver343/chromex ">https://github.com/Oliver343/chromex </a>
          <br />
          </div>
      </div>
      <br />
      <div className="infoText">
        <button className="projectButton" onClick={() => {setExpandOne(true); setExpandTwo(!expandTwo); setExpandThree(true)}}><img height="40px" src={oliversEnglishLogo}/> &nbsp; - Learning website freelance work &nbsp; <FontAwesomeIcon icon={expandTwo ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <br />
        <div className="infoText" hidden={expandTwo}>
          <img className="projectImg" src={oliversEnglishScreen} />
          <br />
          An interactive and engaging English learning website I made through freelance work that is actively being used by WhatsUp academy in Spain. You can view the live website on the following link: 
          <br />
          <a href='https://quiet-salmiakki-a0a7d6.netlify.app/'>https://quiet-salmiakki-a0a7d6.netlify.app/</a>
           
        </div>
      </div>
      <br />
      <div className="infoText">
        <button className="projectButton" onClick={() => {setExpandOne(true); setExpandTwo(true); setExpandThree(!expandThree)}}>Other Projects - Client projects while employed &nbsp; <FontAwesomeIcon icon={expandThree ? faSquareCaretDown : faSquareCaretUp} /></button>
        <div className="infoText" hidden={expandThree}>
          <br />
          I have worked on a number of projects previously while employed with The Next flow as it was a company that provided Angular development solutions. As these were private projects for clients, I am unable to showcase them but can give examples of some below: 
          <br />
          <ul>
            <li>Rehabilitation application using a tablet or smartphones camera to track head movements of the patient and provide this feedback to the patient's doctor.</li>
            <br />
            <li>Large scale client database with login using JWT. New user creation and editing existing credentials with a website and mobile application to provide scalability.</li>
            <br />
            <li>With Veiovia I worked on the backend of a Web3 project using Python to analyze DNA sequencing results and feeding it back into a database.</li>
          </ul>         
          <br />
        </div>
      </div>
      <br />
      <p className="infoText" >I am always interested in working on new projects to help the open-source community or develop new skills. Please feel free to reach out to me if you have something in mind. </p>

    </div>
  );
}

export default Projects;
