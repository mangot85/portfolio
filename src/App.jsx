import { useState } from 'react';
import './App.css';
import Maintenance from './Maintenance';

function App() {

  const [reveal,setReveal] = useState(true)

  console.log(process.env.REACT_APP_MAINTENANCE);

  if(process.env.REACT_APP_MAINTENANCE === "true"){
    return <Maintenance/>
  }


  const toggleReveal = ()=>{
    console.log(reveal)
    setReveal(!reveal)
  }

  return (
    <div>
      <div className="containerAudrey">
        <div className="buttonAudrey" onClick={toggleReveal}>
          {reveal ? "Qui est la plus belle ?" : "Audrey"}
        </div>
      </div>
    </div>
  );
}

export default App;
