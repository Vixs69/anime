// src/firebaseService.js
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase";

// Leggi tutti i documenti di una collezione
export async function leggiItems() {
  const snap = await getDocs(collection(db, "items"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// Aggiungi un nuovo documento
export async function creaItem(data) {
  const ref = await addDoc(collection(db, "items"), data);
  return ref.id;
}

// Elimina un documento per ID
export async function rimuoviItem(id) {
  await deleteDoc(doc(db, "items", id));
}
