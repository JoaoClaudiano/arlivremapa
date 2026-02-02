import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    const fetchSpaces = async () => {
      const querySnapshot = await getDocs(collection(db, "spaces"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSpaces(data);
    };
    fetchSpaces();
  }, []);

  return (
    <MapContainer center={[-15.7801, -47.9292]} zoom={4} style={{ height: "600px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {spaces.map(space => (
        <Marker key={space.id} position={[space.coordinates.lat, space.coordinates.lng]}>
          <Popup>
            <strong>{space.name}</strong><br />
            {space.type}<br />
            {space.city}, {space.state}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
