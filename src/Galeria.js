import React from 'react';
import { ReactDOM } from 'react';
import Kep from './Kep';

const galeria = [
    {
        kep: "kepek/kep1.jpg",
        cim: "Villámlás 1",
        leiras: "Első leírás",
        id: 0
    },
    {
        kep: "kepek/kep2.jpg",
        cim: "Villámlás 2",
        leiras: "Második leírás",
        id: 1
    },
    {
        kep: "kepek/kep3.jpg",
        cim: "Villámlás 3",
        leiras: "Harmadik leírás",
        id: 2
    }
]

class Galeria extends React.Component{

    constructor(){
        super();
        this.state = {
            aktKepIndex: 0
        }
    }

    aktualisKep = (id) => {
        console.log("galériában: " + id);
        this.setState({
            aktKepIndex:id
        })
    }

    render(){
      return(
        <React.Fragment>
        <div className='nagyKep'>
            <button>balra</button>
            <img src='' />
            <button>jobbra</button>
        </div>
        <div className='galeria'>
            {
                galeria.map((elem, index) => {
                        elem.id = index;
                        return <Kep kep={elem} aktualisKep={this.props.aktualisKep} key={elem.id} cim={elem.cim} kep={elem.kep} leiras={elem.leiras}/>
                    }
                )
            }
        </div>
        </React.Fragment>
      );
    }
  }

  export default Galeria;