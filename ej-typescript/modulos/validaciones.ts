export function esUnNumero(texto: string): boolean {
  const regExp = new RegExp('\\d+', 'g')
  return regExp.test(texto)
  // return /\d+/.test(texto)
}

function esTodoMayusculas(texto: string): boolean {
  return texto === texto.toUpperCase()
}

const A = true;

// Exportación nombrada
export {
  // esUnNumero,
  esTodoMayusculas
}