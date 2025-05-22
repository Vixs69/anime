// src/TestDb.jsx
import React, { useEffect, useState } from 'react';
import { creaItem, leggiItems } from './firebaseService';

export default function TestDb() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('Avvio test...');

  useEffect(() => {
    (async () => {
      try {
        setStatus('Creazione di un documento di test…');
        const newId = await creaItem({ text: 'Elemento di prova', createdAt: Date.now() });
        setStatus(`Documento creato con ID ${newId}. Recupero tutti i documenti…`);

        const all = await leggiItems();
        setItems(all);
        setStatus('Recupero completato');
      } catch (err) {
        console.error(err);
        setStatus('Errore: ' + err.message);
      }
    })();
  }, []);

  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
      <h2>🧪 Test Firebase DB</h2>
      <p><strong>Status:</strong> {status}</p>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <code>{JSON.stringify(item)}</code>
          </li>
        ))}
      </ul>
    </div>
  );
}
