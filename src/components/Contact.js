import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Contact  &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} /></h1>
      </div>
      <p className="infoText" >My contact details are ...</p>

    </div>
  );
}

export default Contact;
