// src/components/SpaceCard.js
import React from "react";
import { Link } from "react-router-dom";

const SpaceCard = ({ space }) => {
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "5px", padding: "10px", marginBottom: "10px" }}>
      <h3>{space.name}</h3>
      <p>{space.type} - {space.city}, {space.state}</p>
      <p>{space.description.substring(0, 100)}...</p>
      <Link to={`/space/${space.id}`} style={{ color: "blue" }}>Ver detalhes</Link>
    </div>
  );
};

export default SpaceCard;
