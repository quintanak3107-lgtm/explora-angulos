// Navegación suave y actualización del título según el nodo visitado.
const titles = {
  inicio: 'Explorá los ángulos',
  nodo2: '¿Qué es un ángulo? | Explorá los ángulos',
  nodo3: 'Tipos de ángulos | Explorá los ángulos',
  nodo4: 'Medición | Explorá los ángulos',
  nodo5: 'Ángulos en la vida cotidiana | Explorá los ángulos',
  nodo6: 'Ángulos en figuras | Explorá los ángulos',
  nodo7: 'Relaciones entre ángulos | Explorá los ángulos'
};

function updateTitle() {
  const id = window.location.hash.replace('#', '') || 'inicio';
  document.title = titles[id] || titles.inicio;
}

window.addEventListener('hashchange', updateTitle);
updateTitle();
