import React from 'react';
import ReactStreetview from 'react-streetview';


export default props => (
  <div className='container'>
    <div className='card card-default'>
      <div className='card-body'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className="btn btn-primary btn-lg" href={'https://maps.google.com/?q=' + props.location} role="button" target="_blank">Location</a>
      </div>
    </div>
  </div>  
);