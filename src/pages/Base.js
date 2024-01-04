import InfoBox from '../components/InfoBox';
import MyStack from '../components/MyStack';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';
import Contact from '../components/Contact';
import './Base.css';
import frame from '../img/frame.png'
import frameStack from '../img/stackFrame.png'
import projectStack from '../img/projectFrame.png'
import timelineStack from '../img/timelineFrame.png'
import contactStack from '../img/contactFrame.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faEnvelope, faFaceSmile, faGear, faFolder, faBusinessTime, faCircleDown } from '@fortawesome/free-solid-svg-icons'
import documentCV from '../documents/OliverSandersonCV.pdf'



function Base() {

  const [selected, setSelected] = useState(0)
  console.log(selected)

  return (
    <div className="Base" style={{ backgroundImage: `url(${
      selected === 0 ? frame : null +
      selected === 1 ? frameStack : null +
      selected === 2 ? projectStack : null +
      selected === 3 ? timelineStack : null +
      selected === 4 ? contactStack : null 
      })`}}>
      <button className="sideButton leftButton" onClick={() => setSelected(selected <= 0 ? 4 : selected - 1)}><FontAwesomeIcon icon={faCaretLeft}  size="4x" /></button>
      <div className="BaseInner">
        {selected === 0 ? <InfoBox /> : null}
        {selected === 1 ? <MyStack /> : null}
        {selected === 2 ? <Projects /> : null}
        {selected === 3 ? <Timeline /> : null}
        {selected === 4 ? <Contact /> : null}
        <div className="buttonsBelow">
          <button className="bottomButton" disabled={selected === 0} onClick={() => setSelected(0)}><FontAwesomeIcon icon={faFaceSmile} size="2x" /></button>
          <button className="bottomButton" disabled={selected === 1} onClick={() => setSelected(1)}><FontAwesomeIcon icon={faGear} size="2x" /></button>
          <button className="bottomButton" disabled={selected === 2} onClick={() => setSelected(2)}><FontAwesomeIcon icon={faFolder} size="2x" /></button>
          <button className="bottomButton" disabled={selected === 3} onClick={() => setSelected(3)}><FontAwesomeIcon icon={faBusinessTime} size="2x" /></button>
          <button className="bottomButton" disabled={selected === 4} onClick={() => setSelected(4)}><FontAwesomeIcon icon={faEnvelope} size="2x" /></button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={documentCV} download="OliverSandersonCV" target='_blank'>
            <button className="bottomButton">CV <FontAwesomeIcon icon={faCircleDown} size="2x" /></button>
          </a>      
        </div>
      </div>
      <button className="sideButton rightButton" onClick={() => setSelected(selected >= 4 ? 0 : selected + 1)}><FontAwesomeIcon icon={faCaretRight} size="4x" /></button>
    </div>
  );
}

export default Base;
