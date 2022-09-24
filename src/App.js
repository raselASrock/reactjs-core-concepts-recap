import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <District name = 'NoaKhali' special = 'Bivag'></District>
      <District name ='Brammonbariya' special = 'Real Hero'></District>
      <District name = 'Kumilla' special = 'Moynamoti'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightBlue', margin: '20px', borderRadius: '20px',padding: '20px'
}

function District(props){
  const [power,setPower] = useState(1)
  const bootsPower = () => {
    const newPower = power * 2;
    setPower(newPower)
  }
  return(
    <div style={districtStyle}>
      <h2>Name:{props.name} </h2>
      <p>Speciality:{props.special} </p>
      <h4>Power:{power}</h4>
      <button onClick={bootsPower}>Boots The Power</button>
    </div>
    

  )
}
export default App;
