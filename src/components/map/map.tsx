import * as React from "react";
import {styles} from "./style-for-map";
import {Map, GoogleApiWrapper, Marker} from "google-maps-react";

class MapGoogle extends React.PureComponent<{google}> {
  private mapRef: React.RefObject<HTMLDivElement>;
  zoom: number;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  componentDidMount() {
    const map = this.mapRef.current;
  }
  render() {
    return (
      <div className="map-box">
        {/* <div ref={this.mapRef} id="map"></div> */}
        <Map
          google={this.props.google}
          style={{styles}}
          initialCenter={{lat: 47.444, lng: -122.176}}
        >
          <Marker  />
          <Marker  />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper((props: any) => ({
  apiKey: `AIzaSyBnniXnqAn9pmr-qVqBbAFvFJ4pcsypCFA`,
}))(MapGoogle);
