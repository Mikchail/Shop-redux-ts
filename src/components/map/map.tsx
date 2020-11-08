import * as React from "react";
import {mapStyle} from "./style-for-map";
import {
  Map,
  GoogleApiWrapper,
  Marker,
  InfoWindow,
  mapEventHandler,
  markerEventHandler,
  Circle,
} from "google-maps-react";

class MapGoogle extends React.PureComponent<{google}> {
  private mapRef: React.RefObject<HTMLDivElement>;
  onMapClicked: mapEventHandler;
  onMarkerClick: markerEventHandler;
  onInfoWindowClose: any;
  // map?: google.maps.Map | google.maps.StreetViewPanorama
  zoom: number;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  componentDidMount() {
    const map = this.mapRef.current;
  }


  _mapLoaded(mapProps, map) {
    map.setOptions({
       styles: mapStyle
    })
 }
  render() {
    return (
      <div className="map-box">
        {/* <div ref={this.mapRef} id="map"></div> */}
        <Map
          google={this.props.google}
          initialCenter={{lat: 47.444, lng: -122.176}}
          onReady={(mapProps, map) => this._mapLoaded(mapProps, map)}
        >
          <Circle
            radius={1200}
            center={{lat: 47.444, lng: -122.176}}
            onMouseover={() => console.log("mouseover")}
            onClick={() => console.log("click")}
            onMouseout={() => console.log("mouseout")}
            strokeColor="transparent"
            strokeOpacity={0}
            strokeWeight={5}
            fillColor="#FF0000"
            fillOpacity={0.2}
          />
          <Marker />
          <Marker />
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper((props: any) => ({
  apiKey: `AIzaSyBnniXnqAn9pmr-qVqBbAFvFJ4pcsypCFA`,
}))(MapGoogle);
