//definir variables o selectores
//marca, year, minimo, maximo, puertas, trsmision, color, resultado
const Era = document.querySelector('#Era');
const Autor = document.querySelector('#Autor');
const Edicion = document.querySelector('#Edicion');
const Categoria = document.querySelector('#Categoria');
const Episodio = document.querySelector('#Episodio');
const ISBN = document.querySelector('#ISBN');
const formulario = document.querySelector('#buscador')

const max = new Date().getFullYear();
const fechamin = max - 10;

const datoBusqueda = {
    Era: '',
    Autor: '',
    Edicion: '',    
    Categoria: '',
    Episodio: '',
    ISBN: ''


}


//metodo para crear evento
document.addEventListener('DOMContentLoaded', ()=>{ //DOMContentloaded es para que haga carga inicial de todos los elementos
    //llenar enlistados de años


    mostrarAños();
    mostrarLibros(libros);


})


//si la funcion no es larga, se puede crear con el metodo change, si es larga es mejor crearla y llamrla
Era.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.Era = e.target.value;//entonces el va a tomar el dato que especifiquemos y lo va mostrar en consola

    filtrarLibros(); //creamos una funcion para cada elemento
})

Edicion.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.Edicion = Number (e.target.value); // pasar una respuesta string a numero se puede usar parseint o parsefloat, pero la manera mas practica es:
    filtrarLibros();
})

Autor.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.Autor = e.target.value; 
    filtrarLibros();
})



Categoria.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.Categoria = e.target.value; 
    filtrarLibros();
})

Episodio.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.Episodio = e.target.value; 
    filtrarLibros();
})


ISBN.addEventListener('change', e=>{
    console.log(e.target.value)//en este caso no queremos el texto, si no el value del elemento
    datoBusqueda.ISBN = Number (e.target.value); // pasar una respuesta string a numero se puede usar parseint o parsefloat, pero la manera mas practica es:
    filtrarLibros();
})

function mostrarAños(){
    for(let i = max; i>= fechamin; i--){
        const opcion = document.createElement('option'); //buscamos en el html la etiqueta del select
        opcion.value = i;
        opcion.textContent = i;

        Edicion.appendChild(opcion) //para trabajar con html se usa el appendchild, luego se especifica la etiqueta 
    }
}

function mostrarLibros(libros){

limpiarHTML();

   libros.forEach(i=>{ //foreach sirve para recorrer un arreglo y todas sus posiciones sin retornar nada
    const librosHTML = document.createElement(`p`);  //el resultado lo importamos al html en una etiqueta p

    //para poder acceder al atributo de cada elemento del arreglo esto se llama destructuring

    const {Nombre, Era, Autor, Edicion, Año, Categoria, Episodio, ISBN} = i

    //usamos text content para generar texto 
    //llamamos al selector autoshtml
    librosHTML.textContent =`
    ${Nombre} - Era: ${Era} - ${Año} - ${Edicion} - Autor: ${Autor} -  Episodio: ${Episodio} - Categoria: ${Categoria} - ISBN: ${ISBN}
    `
    
    resultado.appendChild(librosHTML);

   })
   
}

function filtrarLibros(){
  
    const resultado = libros.filter(filtrarEra).filter(filtrarEdicion).filter(filtrarAutor).filter(filtrarCategoria).filter(filtrarEpisodio).filter(filtrarISBN)
    //creamos una funcion de filtrar para cada atributo 
     
    console.log(resultado)
   mostrarLibros(resultado) 
    

  
}

function filtrarEra(libros){
    if(datoBusqueda.Era){
        
        return libros.Era === datoBusqueda.Era

        
    }

    return libros; //en el caso que no ingrese en el if, lo retorna tal cual lo recibio


}

function filtrarEdicion(libros){
    if (datoBusqueda.Edicion){
        return libros.Edicion === datoBusqueda.Edicion
    }

    return libros;
}

function filtrarAutor(libros){
    if (datoBusqueda.Autor){
        return libros.Autor === datoBusqueda.Autor
    
    }

    return libros;
}


function filtrarCategoria(libros){
    if (datoBusqueda.Categoria){
            return libros.Categoria === datoBusqueda.Categoria
        }

     return libros;
}



function filtrarEpisodio(libros){
    if (datoBusqueda.Episodio){
            return libros.Episodio == datoBusqueda.Episodio
        }

     return libros;
} 


function filtrarISBN(libros){
    if (datoBusqueda.ISBN){
        return libros.ISBN == datoBusqueda.ISBN
    }

 return libros;
}

function limpiarHTML(){  //para limpiar el contenedor resultado, llamamos a la funcion de mostrar autos para remover
    while (resultado.firstChild){
    resultado.removeChild(resultado.firstChild)
    }
    
}