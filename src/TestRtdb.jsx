// src/TestRtdb.jsx
import React, { useEffect, useState } from 'react';
import { creaItem, leggiItems } from './firebaseService';

export default function TestRtdb() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    leggiItems(setItems);
    creaItem({ text: 'prova RTDB', ts: Date.now() });
  }, []);

  return (
    <ul>
      {items.map(i => (
        <li key={i.id}>{i.text} ({i.ts})</li>
      ))}
    </ul>
  );
}
