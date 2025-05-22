// src/firebaseService.js
import { ref, set, push, onValue } from "firebase/database";
import { rtdb } from "./firebase";

// Scrive un nuovo elemento in “items”
export function creaItem(item) {
  const itemsRef = ref(rtdb, 'items');
  return push(itemsRef, item);  // ritorna una Promise
}

// Legge tutti gli elementi di “items” e chiama callback con un array
export function leggiItems(callback) {
  const itemsRef = ref(rtdb, 'items');
  onValue(itemsRef, snap => {
    const data = snap.val() || {};
    const arr = Object.entries(data).map(([id, val]) => ({ id, ...val }));
    callback(arr);
  });
}
