document.querySelectorAll('.ramo').forEach(ramo => {
  const requisitos = ramo.dataset.requisitos.split(',').map(r => r.trim()).filter(Boolean);
  if (requisitos.length > 0) {
    ramo.classList.add('bloqueado');
  } else {
    ramo.classList.add('habilitado');
  }

  ramo.addEventListener('click', () => {
    if (ramo.classList.contains('bloqueado')) return;
    if (ramo.classList.contains('aprobado')) {
      ramo.classList.remove('aprobado');
    } else {
      ramo.classList.add('aprobado');
    }
    actualizarRamos();
  });
});

function actualizarRamos() {
  document.querySelectorAll('.ramo').forEach(ramo => {
    const requisitos = ramo.dataset.requisitos.split(',').map(r => r.trim()).filter(Boolean);
    if (requisitos.length > 0) {
      const aprobados = requisitos.every(nombre =>
        [...document.querySelectorAll('.ramo.aprobado')].some(r => r.textContent === nombre)
      );
      if (aprobados) {
        ramo.classList.remove('bloqueado');
        ramo.classList.add('habilitado');
      } else {
        ramo.classList.remove('habilitado');
        ramo.classList.add('bloqueado');
      }
    }
  });
}
