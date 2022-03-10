import React from 'react';
import "./kep.css";
import Galeria from './Galeria';

const kep = {
  kep: "kepek/kep1.jpg",
  cim: "villámlás 1",
  leiras: "Város villámlás",
  id: 0
}

class Kep extends React.Component{
  constructor(props){
    super(props);
  }
  kattintasKezelo = () => {
    console.log(this.props.kep.id);
    //this.props.aktualisKep(this.props.kep.id);
  }
  render(){
    return(
      <div className='kep' onClick={this.kattintasKezelo}>
        <h1>{this.props.cim}</h1>
        <img src={this.props.kep} alt={this.props.cim} />
        <p>{this.props.leiras}</p>
      </div>
    );
  }
}

export default Kep;