import logo from './logo.svg';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup, useMap } from 'react-leaflet';
import { useState } from "react";
import "./index.css"




function App() {
  
  const { BaseLayer, Overlay } = LayersControl;
const [lng, setLng] = useState(51.505);
const [lat, setLat] = useState(-0.09);
const [height, setHeight] = useState(400);
const [width, setWidth] = useState(200);
const [url , setUrl] = useState("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")

function onSubmit(e) {
  e.preventDefault();
  console.log(e.target.lng.value);
  console.log(e.target.lat.value);
  if(e.target.height.value !== ""){
    setHeight(e.target.height.value);
  }
  if(e.target.width.value !== ""){
    setWidth(e.target.width.value);
  }
  if(e.target.lng.value !== ""){
    setLng(e.target.lng.value);
  }
  if(e.target.lat.value !== ""){
    setLat(e.target.lat.value);
  }
}
function SetViewOnClick({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

  return (
    <main className=' text-slate-300 h-screen'>
<div className={`m-4 p-4 rounded-lg bg-darkThemeMeetingCardColor shadow-lg flex flex-col md:flex-row max-w-[1400px]   lg:mx-auto lg:space-x-5 `} >
      <div className="w-full md:w-1/2 h-[200px] md:h-[400px] bg-gray-200">
        <h1 className="text-2xl font-bold text-center mt-4">Map</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="lng">longitude</label>
            <input type="number" name="lng" id="lng" step="0.00000000001" className=' bg-slate-700' />
            <label htmlFor="lat">latitude</label>
            <input type="number" name="lat" id="lat" step="0.00000000001" className=' bg-slate-700' />
            <label htmlFor="height">height</label>
            <input type="number" name="height" id="height" className=' bg-slate-700' placeholder='in pixels' />
            <label htmlFor="width">width</label>
            <input type="number" name="width" id="width" className=' bg-slate-700' placeholder='in pixels' />
            <button type="submit" className=' bg-zinc-800 rounded w-auto'>Submit</button>
          </div>
        </form>
      </div>
    <div className= {` h-[${height}px] md:w-1/2 md-w-full md-w-[${width}px] md:h-[${height}px] z-10 overflow-x-hidden mt-6 md:mt-0 md:ml-2 `}>
      <MapContainer center={[lng, lat]}  zoom={13} scrollWheelZoom={true} fu style={{height:`${height}px`, width:`[${width}px]`}}   >
      <button className='fullscreen-icon' onClick={() => { document.querySelector('.leaflet-control-fullscreen-button').click() }}>
        Fullscreen
      </button>
        <TileLayer
        loadingIndicator={<div className="text-center">Loading...</div>}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url={url}
        />
        
        <Marker position={[lng, lat]}>
          <Popup>
            longitude: {lng} <br /> latitude: {lat}
          </Popup>
        </Marker>
        <LayerGroup>
          <LayersControl position="topright">
            <BaseLayer name="OpenStreetMap.Mapnik">
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </BaseLayer>
            <BaseLayer name="Detailed map">
              <TileLayer
                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />
            </BaseLayer>
            <BaseLayer name="OpenStreetMap.DE">
              <TileLayer
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
              />
            </BaseLayer>
            <BaseLayer name="OpenStreetMap.HOT">
              <TileLayer
              url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
              />
            </BaseLayer>
          </LayersControl>
        </LayerGroup>
        <SetViewOnClick
        coords={[
          lng,
          lat
        ]}
      />
      </MapContainer>
    </div>
      
      </div>
    </main>
    

  );
}

export default App;
