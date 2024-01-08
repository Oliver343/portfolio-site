import './InfoBox.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime, faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'

function Timeline() {
  const [expandOne, setExpandOne] = useState(true)
  const [expandTwo, setExpandTwo] = useState(true)
  const [expandThree, setExpandThree] = useState(true)
  const [expandFour, setExpandFour] = useState(true)
  const [expandFive, setExpandFive] = useState(true)
  const [expandSix, setExpandSix] = useState(true)

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Timeline  &nbsp;&nbsp;<FontAwesomeIcon icon={faBusinessTime} /></h1>
      </div>
      <div className="infoText" >
        <br />
        My work and education history is listed below. Click on an option to see the related skills.
        <br />
        <br />
        <button className="projectButton" onClick={() => {setExpandOne(!expandOne) }}>4Geeks - Full-Stack Software Developer Course - (2023) &nbsp; <FontAwesomeIcon icon={expandOne ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandOne}>
          <li>React</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        <br hidden={!expandOne}/>
        <button className="projectButton" onClick={() => {setExpandTwo(!expandTwo) }}>Next Flow - Angular Developer - (2022 - 2023)  &nbsp; <FontAwesomeIcon icon={expandTwo ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandTwo}>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        <br hidden={!expandTwo}/>
        <button className="projectButton" onClick={() => {setExpandThree(!expandThree) }}>Veiovia Ltd - Junior Software Developer - (2022)   &nbsp; <FontAwesomeIcon icon={expandThree ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandThree}>
          <li>React</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Web3</li>
        </ul>
        <br hidden={!expandThree}/>
        <button className="projectButton" onClick={() => {setExpandFour(!expandFour) }}>Ministry of Defense - Data Analyst - (2019 - 2021)    &nbsp; <FontAwesomeIcon icon={expandFour ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandFour}>
          <li>SQL</li>
          <li>Database</li>
        </ul>
        <br hidden={!expandFour}/>
        <button className="projectButton" onClick={() => {setExpandFive(!expandFive) }}>Ebuyer - Product Supervisor / Technical Support Supervisor - (2013 - 2019)    &nbsp; <FontAwesomeIcon icon={expandFive ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandFive}>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        <br hidden={!expandFive}/>
        <button className="projectButton" onClick={() => {setExpandSix(!expandSix) }}>Computer Science Degree - University of Hull, England- (2011)    &nbsp; <FontAwesomeIcon icon={expandSix ? faSquareCaretDown : faSquareCaretUp} />&nbsp;</button>
        <ul hidden={expandSix}>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>SQL</li>
        </ul>
        <br hidden={!expandSix}/>
        <br />
      </div>

    </div>
  );
}

export default Timeline;
