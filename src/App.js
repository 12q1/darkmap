import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <MapContainer style={{ height: "100vh", width: "100vw" }} center={[59.329, 18.068]} zoom={13} scrollWheelZoom={true} zoomControl={false} attributionControl={false}>
        <TileLayer
          //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/12q1/ckt27sq5h04jx18lqr5q9vkvr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiMTJxMSIsImEiOiJja3QyNGt1MWgwZ3czMnd1bGZtYmNmMnM3In0.A-76Dmcwo88DHHV4dkBvTA"
          //url="https://api.mapbox.com/styles/v1/12q1/ckt27ipwl14zj17q911begbtj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiMTJxMSIsImEiOiJja3QyNGt1MWgwZ3czMnd1bGZtYmNmMnM3In0.A-76Dmcwo88DHHV4dkBvTA"
          //url="https://api.mapbox.com/styles/v1/12q1/ckt24h5fa01c417p7l9cyu9ia/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiMTJxMSIsImEiOiJja3QyNGt1MWgwZ3czMnd1bGZtYmNmMnM3In0.A-76Dmcwo88DHHV4dkBvTA"
        />
      </MapContainer>
    </div>
  );
}

export default App;
