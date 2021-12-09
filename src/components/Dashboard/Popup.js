import React from 'react'
import './Popup.scss';

const Popup = props => {
    return (
      <div className="popup-box">
        <div className="box">
        <span class="close" onClick={props.handleClose}>&times;</span>
          {props.content}
        </div>
      </div>
    );
  };
   
  export default Popup;
