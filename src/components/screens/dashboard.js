import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Dashboard extends Component{
  render(){
    return(
      <div>
        <Map google={this.props.google} zoom={14}>
   
          <Marker onClick={this.props.onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{}</h1>
              </div>
          </InfoWindow>
        </Map>

      </div>
    )
  }

}

export default GoogleApiWrapper({
  apiKey: ("")
})(Dashboard)
