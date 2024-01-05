import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Contact() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Contact  &nbsp;&nbsp;<FontAwesomeIcon icon={faEnvelope} /></h1>
      </div>
      <div className="infoText" >
        <h3>Contact details</h3>
        &nbsp;<FontAwesomeIcon icon={faEnvelope} /> - oliver_343@hotmail.com
        <br />
        &nbsp;<FontAwesomeIcon icon={faPhone} /> - (+44) 7858144283
        <br />
        &nbsp;<FontAwesomeIcon icon={faPhone} /> - (+34) 634406983
        <br />
        <h3>Social Links</h3>
        &nbsp;<FontAwesomeIcon icon={faLinkedin} /> - <a href="http://www.linkedin.com/in/oliver-sanderson-66357b182">http://www.linkedin.com/in/oliver-sanderson-66357b182</a>
        <br />
        &nbsp;<FontAwesomeIcon icon={faGithub} /> - <a href="https://github.com/Oliver343">https://github.com/Oliver343</a>
        <br />
        <br />
      </div>

    </div>
  );
}

export default Contact;
