let abrir = document.querySelector("#abrir")
let cerrar = document.querySelector(".cerrar") 
let overlay = document.querySelector(".overlay")
let nav_2 = document.querySelector(".nav_2")
let inicial = 0
let anterior = ""

abrir.addEventListener("click", function() {
    overlay.style.display = "block";
    nav_2.classList.remove("transladar2");

    setTimeout(function() {
        nav_2.classList.add("transladar");
    }, 100);
});

cerrar.addEventListener("click", function() {

    setTimeout(function() {
        nav_2.classList.add("transladar2");
    }, 100);
    
    setTimeout(function() {
        overlay.style.display = "none";
        nav_2.classList.remove("transladar");
    }, 400);
    
});

let fotos = document.querySelectorAll(".foto__raza");
let seccion = document.querySelector(".seccion_4")
let ventana;

const objeto = [
    {
        numero: 0,
        titulo: 'Orcos',
        parrafo: 'La Horda, una confederación de tribus de orcos, trols y tauren, se define por la fuerza bruta y por el poder de sus chamanes. Su historia está marcada por la lucha por la supervivencia en un mundo hostil, forjando un legado de coraje y determinación.',
        fondo: "../imagenes/seccion5/orcosfondo.webp",
        fondo2: "../imagenes/seccion5/orco990.webp",
        fondo3: "../imagenes/seccion5/orcofull.webp",
        marco: "../imagenes/seccion5/orco2.png",
        marco2: "../imagenes/seccion5/orco1.avif"
    },
    {
        nombre: 1,
        titulo: 'Elfos Nocturnos',
        parrafo: 'Los rasgos distintivos de los elfos de la noche de Kalimdor son la movilidad, la potencia de fuego a distancia y el dominio de la magia. Aunque carecen de la fuerza bruta de otras razas, lo compensan de sobra con su destreza con el arco y la magia.',
        fondo: "../imagenes/seccion5/elfosfondo.webp",
        fondo2: "../imagenes/seccion5/elfo990.webp",
        fondo3: "../imagenes/seccion5/elfofull.webp",
        marco: "../imagenes/seccion5/elfos2.png",
        marco2: "../imagenes/seccion5/elfos.webp"
    },
    {
        nombre: 2,
        titulo: 'Humanos',
        parrafo: 'La Alianza es un conglomerado de humanos, elfos y enanos. Esta versátil facción cuenta con poderosas unidades de tierra y aire, gran capacidad de asedio y lanzahechizos formidables.',
        fondo: "../imagenes/seccion5/fondohumanos.webp",
        fondo2: "../imagenes/seccion5/humano990.webp",
        fondo3: "../imagenes/seccion5/humanofull.webp",
        marco: "../imagenes/seccion5/humanos2.png",
        marco2: "../imagenes/seccion5/humanos.webp"
    },
    {
        nombre: 3,
        titulo: 'No-Muertos',
        parrafo: 'Los no-muertos, una facción equilibrada con unidades resistentes en tierra y poderosas en el aire, pueden reclutar ejércitos más numerosos que los de ninguna otra gracias a la insidiosa magia de la nigromancia.',
        fondo: "../imagenes/seccion5/muertosfondo.webp",
        fondo2: "../imagenes/seccion5/muerto990.webp",
        fondo3: "../imagenes/seccion5/muertofull.webp",
        marco: "../imagenes/seccion5/muertos2.png",
        marco2: "../imagenes/seccion5/muertos.webp"
    }
];

let titulo = document.getElementById("titulo")
let parrafo = document.getElementById("parrafo")
let foto = document.querySelector("div .foto__raza:first-of-type")

fotos.forEach(el => {

    el.addEventListener("click", function(){
        //! Quito el marco de los orcos la primer iteracion y el marco anterior
        foto.src = objeto[0].marco2
        anterior.src = objeto[inicial].marco2

        //! Establezco la posicion del objeto seleccionado
        const valor = el.getAttribute('data-valor');

        //! Cambio el color del marco, titulo, parrafo y fondo de la seccion
        el.src = objeto[valor].marco
        titulo.innerText = objeto[valor].titulo
        parrafo.innerText = objeto[valor].parrafo
        seccion.style.backgroundImage = `url(${objeto[valor].fondo})`

        //! Guardo la posicion del objeto anterior
        inicial = valor

        //! Cambio el fondo en caso de responsive
        cambioTamaño(inicial)

        //! Guardo al elemento que utilize para que pueda modificar su marco cuando vuelvo a seleccionar otro marco
        anterior = el
    })
})

//! fondo 1 hasta 900px
//! fondo 2 hasta 1200px
//! fondo 3 mayor 1200px

function cambioTamaño(x){
    if(window.innerWidth <= 990){
        seccion.style.backgroundImage = `url(${objeto[x].fondo})`
    } else if(window.innerWidth <= 1100) {
        seccion.style.backgroundImage = `url(${objeto[x].fondo2})`
    } else if(window.innerWidth >= 1100) {
        seccion.style.backgroundImage = `url(${objeto[x].fondo3})`
    }
}

window.addEventListener('resize', () => {
    cambioTamaño(inicial)
})

//! Valores por defecto de la seccion de raza.
titulo.innerText = objeto[0].titulo
parrafo.innerText = objeto[0].parrafo
foto.src = objeto[0].marco

//! Funcion que se encarga de adapatar la imagen de fondo de la seccion en caso de que se achique para que sea responsive
cambioTamaño(inicial)


