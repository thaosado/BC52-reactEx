import React, {useState} from 'react'
import Body from './Body';
import HeaderGlasses from './HeaderGlasses';
import data from './dataGlasses.json';

export default function Glasses() {
  const [selectedGlasses, setSelectedGlasses] = useState([])

  const handleChangeGlasses = (glassID) => {
    const glasses = data.filter((value) => {
      return glassID === `${value.id}`;
    })
    setSelectedGlasses(glasses)
    if(!selectedGlasses){
      return
    }
  };

  return (
    <>
    <div style={{backgroundImage: 'url(./img/background.jpg)'}}>
        <HeaderGlasses />
        <Body glasses={selectedGlasses} onChangeGlasses={handleChangeGlasses}/>
    </div>
    
    </>
    
  )
}
