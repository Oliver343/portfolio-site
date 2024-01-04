import './InfoBox.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  const [expandOne, setExpandOne] = useState(true)
  const [expandTwo, setExpandTwo] = useState(true)
  const [expandThree, setExpandThree] = useState(true)

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Projects  &nbsp;&nbsp;<FontAwesomeIcon icon={faFolder} /></h1>
      </div>
      <p className="infoText" >My projects are ...</p>
      <div className="infoText">
        <button className="projectButton" onClick={() => setExpandOne(!expandOne)}>Project 1 <FontAwesomeIcon icon={expandOne ? faSquareCaretDown : faSquareCaretUp} /></button>
        <div hidden={expandOne}>MORE INFO ON PROJECT 1</div>
      </div>
      <br />
      <div className="infoText">
        <button className="projectButton" onClick={() => setExpandTwo(!expandTwo)}>Project 2 <FontAwesomeIcon icon={expandTwo ? faSquareCaretDown : faSquareCaretUp} /></button>
        <div hidden={expandTwo}>MORE INFO ON PROJECT 2</div>
      </div>
      <br />
      <div className="infoText">
        <button className="projectButton" onClick={() => setExpandThree(!expandThree)}>Project 3 <FontAwesomeIcon icon={expandThree ? faSquareCaretDown : faSquareCaretUp} /></button>
        <div hidden={expandThree}>MORE INFO ON PROJECT 3</div>
      </div>

      <p className="infoText" >Always looking for more...</p>

    </div>
  );
}

export default Projects;
