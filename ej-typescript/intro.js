var a = 1;
a = 2;
console.log(a);
const NUM_MAX = 4;
// NUM_MAX = 8
let b = 'Hola mundo';
b += '!!!';
function diferenciaEntreVarYLet() {
    var z = 1;
    let y = 1;
    if (true) {
        var z = 2;
        let y = 2;
        console.log(z, y); // 2, 2
    }
    console.log(z, y); // 2, 1
}
diferenciaEntreVarYLet();
// let telefono: number | string = 677889912
let telefono = '677889912';
// any, []number, Array<string>, void, boolean
let cualquierCosa = 123;
cualquierCosa = 'un string';
cualquierCosa = false;
cualquierCosa = [1, 2, 3];
let arrayDeNumerosYStrings = [1, '2', '4', 89];
const serie1 = {
    titulo: 'The Walking Dead',
    numTemporadas: 10,
    finalizada: false,
    descripcion: 'Una serie de zombies...'
};
const jasonStatham = {
    nombre: 'JSON',
    apellidos: 'Statham',
    peliculasEnLasQueSale: ['Los mercenarios', 'Transporter']
};
function muestraDatosSerie(serie) {
    // const titulo = serie.titulo
    // const numTemporadas = serie.numTemporadas
    const { titulo, numTemporadas: nTemporadas, finalizada } = serie;
    // console.log('La serie ' + serie.titulo + ' tiene ' + serie.numTemporadas + ' temporadas, y ' + (serie.finalizada ? 'ha finalizado ya' : 'no ha finalizado todavía'))
    // console.log('La serie ' + titulo + ' tiene ' + nTemporadas + ' temporadas, y ' + (finalizada ? 'ha finalizado ya' : 'no ha finalizado todavía'))
    console.log(`La serie ${titulo} tiene ${nTemporadas} temporadas, y ${finalizada ? 'ha finalizado ya' : 'no ha finalizado todavía'}`);
}
muestraDatosSerie(serie1);
function getNumLoteria(numSorteo, ...numeros) {
    // function getNumLoteria(numSorteo: number, ...numeros: Array<number>): string {
    const sorteos = {
        1: 'Bonoloto',
        2: 'Primitiva',
        3: 'Euromillón'
    };
    return `Los números para el sorteo ${sorteos[numSorteo]} son: ${numeros.join(', ')}`;
}
const numeros = getNumLoteria(2, 3, 5, 13, 27, 36, 42);
console.log(numeros);
const frutas = ['Piña', 'Naranja', 'Sandia', 'Manzana'];
const nuevasFrutas = ['Kiwi', ...frutas];
console.log(nuevasFrutas);
// ['Kiwi', 'Piña', 'Naranja', 'Sandia', 'Manzana']
// const [kiwi, piña, ...restoFrutas] = nuevasFrutas
let kiwi, piña, restoFrutas;
[kiwi, piña, ...restoFrutas] = nuevasFrutas;
console.log(restoFrutas);
// const yamelStatham = jasonStatham
const yamelStatham = { ...jasonStatham, nombre: 'YAML' };
// yamelStatham.nombre = 'YAML'
console.log(jasonStatham, yamelStatham);
