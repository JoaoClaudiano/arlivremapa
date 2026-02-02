import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const SpaceDetail = () => {
  const { id } = useParams();
  const [space, setSpace] = useState(null);

  useEffect(() => {
    const fetchSpace = async () => {
      const docRef = doc(db, "spaces", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) setSpace(docSnap.data());
    };
    fetchSpace();
  }, [id]);

  if (!space) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{space.name}</h2>
      <p>{space.description}</p>
      <p>{space.city}, {space.state}</p>
      {/* Aqui você pode adicionar fotos, avaliações e comentários */}
    </div>
  );
};

export default SpaceDetail;
