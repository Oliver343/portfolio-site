import './InfoBox.css';
import face from '../img/face.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'

function InfoBox() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Hello World! &nbsp;&nbsp;<FontAwesomeIcon icon={faFaceSmile} /></h1>
      </div>
      <p className="infoText" >Oliver Sanderson - Fullstack Developer at your service. Looking for my next employment opertunity. Please get in contact if you have anything in mind!
        Currently living between Spain and England with the right to work in both UK and EU.
        lorum 
        Fullstack Developer at your service. Looking for my next employment opertunity. Please get in contact if you have anything in mind!
        Currently living between Spain and England with the right to work in both UK and EU.
 
      </p>
      <img src={face}></img>
    </div>
  );
}

export default InfoBox;
