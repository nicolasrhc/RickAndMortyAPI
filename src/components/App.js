import React from 'react';
import Form from './Form'
import Footer from './Footer'
import Characters from './Characters'
import '../App.css';

const App = () => (
  <div className="App">
    <div className="Izquierda">
      <Form 
        status_options={[ 'Alive', 'Dead', 'unknown']} 
        gender_options={[ 'Female', 'Male', 'Genderless', 'unknown']}
      />
      <Footer />
    </div>
    <div className="Derecha"> 
      <Characters />
    </div>  
  </div>
)

export default App;
