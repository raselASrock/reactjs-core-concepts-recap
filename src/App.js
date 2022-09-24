import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name = 'NoaKhali' special = 'Bivag'></District>
      <District name ='Brammonbariya' special = 'Real Hero'></District>
      <District name = 'Kumilla' special = 'Moynamoti'></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([]);
  useEffect( () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])
  return(
    <div>
      <h1>Total Posts:{posts.length}</h1>
      {
        // posts.map( post => console.log(post))
        posts.map( post => <Post title ={post.title} body ={post.body}></Post>)
      }
    </div>
  )
}

function Post(props){
  return(
    <div style={{backgroundColor:'lightsalmon', margin: '20px', padding:'15px', border: '2px solid Blue'}}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
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
