import React , {Fragment, Component } from 'react';
import './App.css';
import Navbar from "./Components/layout/Navbar";

class App extends Component{

  render(){

    return (

      <div className="App">

        <Navbar title="Github Finder" icon="fab fa-github" />

      </div>
      
    );
  }


 
}

export default App;
