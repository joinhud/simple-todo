let idCounter = Number(window.localStorage.getItem('id-counter')) || 0;
const mask = Date.now();

export default function generateId() {
  return (++idCounter + mask).toString(16);
}
