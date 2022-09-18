class Pizzas {
    constructor(id, nombre, ingredientes, precio) {
            this.id = id;
            this.nombre = nombre;
            this.ingredientes = ingredientes;
            this.precio = precio;
    }
}

let mozzarella = new Pizzas(1, 'mozzarella', ['masa', 'salsa de la casa', 'queso mozzarella'], 900);
let doblemozzarella = new Pizzas (2, 'doble mozzarella', ['masa', 'salsa de la casa', 'doble capa de queso mozzarella'], 1100);
let fugazzetta = new Pizzas (3,'fugazzetta', ['masa, salsa de la casa, queso, cebollas caramelizadas'], 450);
let rucula = new Pizzas (4, 'rucula', ['masa', 'salsa de la casa', 'queso', 'rucula', 'jamon crudo', 'aceitunas negras'], 1250);
let especial = new Pizzas (5, 'especial', ['masa', 'salsa de la casa', 'queso mozzarella', 'jamon cocido', 'aceitunas negras'], 1350);
let margarita = new Pizzas (6, 'mozzarella', ['masa', 'salsa', 'queso', 'tomates cherries', 'albaca', 'aceite de oliva'], 1400);

let todasLasPizzas = [mozzarella, doblemozzarella, fugazzetta, rucula, especial, margarita];

const pizzasIdImpar = todasLasPizzas.filter(filtrar);
function filtrar (x){
    if(x.id % 2 !=0){console.log(x)}
}

const pizzasMenosDe600 = todasLasPizzas.filter(distinguir);
function distinguir (y){
    if(y.precio < 600){console.log(y)}
}

function nombreYPrecios() {
    todasLasPizzas.forEach(
        function (e) {console.log('la pizza ' + e.nombre, 'sale ' + e.precio + ' pesos')}
    )
}

nombreYPrecios()

function nombreEIngredientes() {
    todasLasPizzas.forEach(
        function (e) {console.log( 'la pizza ' + e.nombre, 'contiene: ' + e.ingredientes)}
    )
}

nombreEIngredientes()

// ENTREGA JS2
let infoBoton = document.getElementById('btn');

infoBoton.addEventListener('click', function () {
    let $valor = document.getElementById('input').value;
})

infoBoton.addEventListener('click', function () {
    let $valor = document.getElementById('input').value;
    let valorParseado = parseInt($valor)

    let resultado = todasLasPizzas.filter((e) => e.id === valorParseado)

    console.log(valorParseado)
    console.log(resultado)

    let nombrePizza = document.getElementById('h2');
    let h2Content = resultado.find(result => result.id == $valor)
    nombrePizza.textContent = `${h2Content.nombre}`;
   
    let precioPizza = document.getElementById('h4');
    let h4Content = resultado.find(result => result.id == $valor)
    precioPizza.textContent = `${h4Content.precio}`;
})

