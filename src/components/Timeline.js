import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'

function Timeline() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Timeline  &nbsp;&nbsp;<FontAwesomeIcon icon={faBusinessTime} /></h1>
      </div>
      <p className="infoText" >My timeline is ...</p>

    </div>
  );
}

export default Timeline;
