import React from 'react';
import "./ResetButton.css";


function ResetButton() {
  
  function refreshPage() {
    window.location.reload();
  }
  
  return (
    <div>
      <button className='resetbutton' onClick={refreshPage}>♻️ RESET</button>
    </div>
  );
}

export default ResetButton;