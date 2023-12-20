import InfoBox from '../components/InfoBox';
import MyStack from '../components/MyStack';
import './Base.css';
import frame from '../img/frame.png'
import frameStack from '../img/stackFrame.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function Base() {

  const [selected, setSelected] = useState(0)

  return (
    // <div className={selected === 0 ? "Base" : null + selected === 1 ? "Stack" : null} >
    //   <div className="InnerBase" style={{ backgroundImage: `url(${selected === 0 ? frame : null + selected === 1 ? frameStack : null})`}}>
    //     <button className="sideButton leftButton" onClick={() => setSelected(0)}><FontAwesomeIcon icon={faCaretLeft}  size="4x" /></button>
    //     {selected === 0 ? <InfoBox /> : null}
    //     {selected === 1 ? <MyStack /> : null}
    //     <button className="sideButton rightButton" onClick={() => setSelected(1)}><FontAwesomeIcon icon={faCaretRight} size="4x" /></button>
    //   </div>
    // </div>

    <div className="InnerBase" style={{ backgroundImage: `url(${selected === 0 ? frame : null + selected === 1 ? frameStack : null})`}}>
      <button className="sideButton leftButton" onClick={() => setSelected(0)}><FontAwesomeIcon icon={faCaretLeft}  size="4x" /></button>
      {selected === 0 ? <InfoBox /> : null}
      {selected === 1 ? <MyStack /> : null}
      <button className="sideButton rightButton" onClick={() => setSelected(1)}><FontAwesomeIcon icon={faCaretRight} size="4x" /></button>
    </div>
  );
}

export default Base;
