import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <District name = 'NoaKhali' special = 'vibag'></District>
      <District name ='Brammonbariya' special = 'Real Hero'></District>
      <District name = 'Kumilla' special = 'Moynamoti'></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightBlue', margin: '20px', borderRadius: '20px'
}

function District(props){
  return(
    <div style={districtStyle}>
      <h2>Name:{props.name} </h2>
      <p>Speciality:{props.special} </p>
    </div>

  )
}
export default App;
