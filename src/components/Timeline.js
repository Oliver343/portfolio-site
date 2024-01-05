import './InfoBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBusinessTime } from '@fortawesome/free-solid-svg-icons'

function Timeline() {

  return (
    <div className="InfoBox">
      <div className="InfoBox2">
        <h1 className="ImgTest">Timeline  &nbsp;&nbsp;<FontAwesomeIcon icon={faBusinessTime} /></h1>
      </div>
      <div className="infoText" >
        <br />
        4Geeks - Full-Stack Software Developer Course - (2023) 
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        Next Flow - Angular Developer - (2022 - 2023) 
        <ul>
          <li>Angular</li>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        Veiovia Ltd - Junior Software Developer - (2022) 
        <ul>
          <li>React</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Web3</li>
        </ul>
        Ministry of Defense - Data Analyst - (2019 - 2021) 
        <ul>
          <li>SQL</li>
          <li>Database</li>
        </ul>
        Ebuyer - Product Supervisor / Technical Support Supervisor - (2013 - 2019) 
        <ul>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
        Computer Science Degree - University of Hull, England- (2011)
        <br />
        <br />
        <br />
      </div>

    </div>
  );
}

export default Timeline;
