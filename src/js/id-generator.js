let idCounter = Number(window.localStorage.getItem('id-counter')) || 0;
const mask = Date.now();

export default function generateId() {
  idCounter += 1;
  const id = (idCounter + mask).toString(16);
  window.localStorage.setItem('id-counter', idCounter);

  return id;
}
