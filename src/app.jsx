import React, { Component } from 'react';
import TopSpot from './topspot';
import ReactStreetview from 'react-streetview';

const axios = require('axios');


class App extends Component {
  constructor(){
    super();
    
    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <div className='jumbotron'>
            <h1>San Diego Top Spots</h1>
            <p>A list of top 30 places to see in San Diego, California</p>
          </div>
          </div >
          { 
            this.state.topspots.map(topspot => (
                <TopSpot
                    key={topspot.id}
                    name={topspot.name}
                    description={topspot.description}
                    location={topspot.location}/>                    
            ))
          }
      </div>
    );
  }
}

export default App;
