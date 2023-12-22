import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

function Projects() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Projects  &nbsp;&nbsp;<FontAwesomeIcon icon={faFolder} /></h1>
      </div>
      <p className="infoText" >My projects are ...</p>

    </div>
  );
}

export default Projects;
