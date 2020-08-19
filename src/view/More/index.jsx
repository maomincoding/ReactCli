import React, { useEffect } from 'react';
import styleMod from './css/index';

const More = ()=>{
  useEffect(() => {
    document.title = 'More';
  }, [])
    return (
      <div>
        <div className={styleMod.moreTit}>
          This is the more page
        </div>
      </div>
    )
}

export default More
