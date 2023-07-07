// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
function Iframe({link}) {
  return ( 
    <div className="ifrmeWapper-Mines" >
      <iframe src={link} frameBorder="0" ></iframe>
    </div>
   );
}

export default Iframe;