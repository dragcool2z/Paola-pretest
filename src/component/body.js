import React, { Component } from 'react';
import axios from 'axios';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -6.224853, lng: 106.803898 }}
  >
    <Marker
      position={{ lat: -6.224853, lng: 106.803898 }}
    />
  </GoogleMap>
);

export default class body extends Component {

	state = 
	{
		loading: true,
		person: null

	};

	async componentDidMount() 
	{
		const url ="https://randomuser.me/api/"
		const response = await fetch(url);
		const data = await response.json();
		this.setState({person: data.results[0], loading: false });
		
			
	}
  render() {
  	if (this.state.loading) {
  		return <div className = "loading">loading . . .</div>;
  	}
  	if (!this.state.person) {
  		return <div className = "error"> Error </div>;
  	}
    return (
      <React.Fragment>
      {/*generated code*/}
      <body id="body">
      	<div className = "bg">
      	<img src="./Picture1.png" className="img-fluid" alt="Responsive image" />
      	</ div>
      	<div className = "person">
      	<img src={this.state.person.picture.large} />
      	</ div>
      	<div className = "text-block">
      	<div className = "name"> {this.state.person.name.first} {this.state.person.name.last}</ div>
      	<div className = "job"> Developer</ div>
        <br></ br>

      	<div className = "dob">Date of Birth : {this.state.person.dob.date}</ div>
      
      	<div className = "gender">Gender &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	 : {this.state.person.gender}</ div>
      	
      	<div className = "phone">Phone 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  :  {this.state.person.phone}</ div>

      	<div className = "email">Email 	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;	 : {this.state.person.email}</ div>

      	<div className = "address">Address &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : {this.state.person.location.street}</ div>
        <div className = "location">location &nbsp;&nbsp;&nbsp;&nbsp; :  </ div>
          <div className = "maps">
            <MapWithAMarker
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100px`, width: `100px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
      </div>
      </body>
      </React.Fragment>
    );
  }
}