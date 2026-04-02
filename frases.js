// Módulo local para frases aleatorias
const frases = [
  "La vida es lo que pasa mientras haces otros planes.",
  "El único modo de hacer un gran trabajo es amar lo que haces.",
  "La creatividad es la inteligencia divirtiéndose.",
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No cuentes los días, haz que los días cuenten.",
  "La paciencia es amarga, pero su fruto es dulce.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
  "La felicidad no es algo hecho. Viene de tus propias acciones.",
  "El conocimiento es poder.",
  "La innovación distingue a un líder de un seguidor.",
  "El fracaso es una oportunidad para comenzar de nuevo con más inteligencia.",
  "La calidad nunca es un accidente; siempre es el resultado de un esfuerzo inteligente.",
  "La perseverancia es la clave del éxito.",
  "El cambio es la ley de la vida."
];

function getRandomFrase() {
  return frases[Math.floor(Math.random() * frases.length)];
}

module.exports = { getRandomFrase };