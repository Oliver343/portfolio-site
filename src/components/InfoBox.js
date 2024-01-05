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
      <p className="infoText" >
      Welcome to the portfolio page of Oliver Sanderson. I am a full-stack developer looking for my next opportunity. My ideal situation would be working in a company where I could grow and develop my skills in a way that would assist the company's needs. However, I am always open to freelance work or assisting on open-source projects. Please see the contact tab for the best ways to get in touch with me.  
  
        </p>
      <div className='centeredBox'>

        <img className='faceImg' width='300px' src={face}></img>
      </div>

    </div>
  );
}

export default InfoBox;
