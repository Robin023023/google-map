import React, { Component } from 'react'

import {Map,GoogleApiWrapper} from 'google-maps-react';

 class GoogleMap extends Component {
  render() {
    return (
      
        <Map google={this.props.google}
        style={{width:"100%", height:"80%"}}
        zoom={10}
        initialCenter = {
          {
           lat: 23.810341,
           lng: 90.412531
          }
        }
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey:"AIzaSyDBffcwJ3MjKwfn1jduB2Gi4eyxUNQQy-I"
})(GoogleMap);