//capturas DOM
let divproductos = document.getElementById("productos")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let  botonmayor = document.getElementById("mayora")
let botonmenor = document.getElementById("menora")
let finalizarcompra = document.getElementById('botonFinalizarCompra')
let btnbuscar = document.getElementById('btnBuscar')
let btnguardarzapa = document.getElementById("guardarzapaBtn")
let encontrado = document.getElementById("coincidencia")
let buscador = document.getElementById("buscador")
let precio = document.getElementById("preciototal")
let hombre = document.getElementById("hombre")
let mujer = document.getElementById("mujer")
let cargatexto = document.getElementById("loaderTexto")


let zapasencarrito = JSON.parse(localStorage.getItem("carrito")) || []
console.log(catalogo)
function agregarproductos(){
    
    let inputmarca = document.getElementById("marcaInput")  
    let inputmodelo = document.getElementById("modeloInput")
    let inputcolor = document.getElementById("colorInput")
    let inputgenero = document.getElementById("generoInput")
    let inputprecio = document.getElementById("precioInput")
    
    
    let zapacreada = new Zapatilla(catalogo.length+1, inputmarca.value, inputmodelo.value,inputcolor.value, inputgenero.value, parseInt(inputprecio.value), "nike.jpg")
    //Objeto creado lo pusheo al array
    catalogo.push(zapacreada)
    //TAMBIÉN MODIFICAMOS ARRAY DEL STORAGE:
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
   
    mostrarcatalogo(catalogo)
    
    inputmarca.value = ""
    inputmodelo.value = ""
    inputcolor.value =""
    inputgenero.value = ""
    inputprecio.value = ""
}
function mostrarcatalogo(array){
    console.log("LLEGAMOS")
    divproductos.innerHTML = ""
    for(let zapa of array ){
        let nuevazapa = document.createElement("div")
        nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
        nuevazapa.innerHTML = `<div id="${zapa.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${zapa.imagen}" alt="${zapa.modelo} de ${zapa.marca}">
        <div class="card-body">
            <h4 class="card-title">${zapa.marca} ${zapa.modelo}</h4>
            <p class = "marca">Marca: ${zapa.marca}</p>
            <p class="${zapa.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${zapa.precio}</p>
        <button id="agregarBtn${zapa.id}" class="btn btn-outline-success">Agregar al carrito</button>
        
        </div>
</div>`

        divproductos.appendChild(nuevazapa)
        let agregar = document.getElementById(`agregarBtn${zapa.id}`)
        agregar.addEventListener("click" ,() =>{
            carrito_add(zapa)
        })
    }

}

function buscar(buscado){
    let busqueda = catalogo.filter(
        (zapa) => zapa.marca.toLowerCase().includes(buscado.toLowerCase()) || zapa.modelo.toLowerCase().includes(buscado.toLowerCase())
        // Coincidencias sin includes (libro) => libro.autor.toLowerCase() == buscado.toLowerCase() || libro.titulo.toLowerCase() == buscado.toLowerCase()
    )
    //con ternario:
    busqueda.length == 0 ? 
    (coincidencia.innerHTML = `<h3 class="text-success m-2">No hay coincidencias con su búsqueda.. a continuación tiene todo nuestro catálogo disponible</h3>`, mostrarCatalogo(array)) 
    : (coincidencia.innerHTML = "", mostrarcatalogo(busqueda))
}



function menoramayor(){
    let catalogomenoramayor = catalogo.sort((a,b) => parseFloat(a.precio) - parseFloat(b.precio))
    divproductos.innerHTML = ""
    for(let zapa of catalogomenoramayor ){
        let nuevazapa = document.createElement("div")
        nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
        nuevazapa.innerHTML = `<div id="${zapa.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${zapa.imagen}" alt="${zapa.modelo} de ${zapa.marca}">
        <div class="card-body">
            <h4 class="card-title">${zapa.marca} ${zapa.modelo}</h4>
            <p class = "marca">Marca: ${zapa.marca}</p>
            <p class="${zapa.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${zapa.precio}</p>
        <button id="agregarBtn${zapa.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        
        divproductos.appendChild(nuevazapa)
        let agregar = document.getElementById(`agregarBtn${zapa.id}`)
        agregar.addEventListener("click" ,() =>{
            carrito_add(zapa)
        })
    }

}
function mayoramenor(){
    let catalogomayoramenor = catalogo.sort((a,b) => parseFloat(b.precio) - parseFloat(a.precio))
    divproductos.innerHTML = ""
    for(let zapa of catalogomayoramenor ){
        let nuevazapa = document.createElement("div")
        nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
        nuevazapa.innerHTML = `<div id="${zapa.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${zapa.imagen}" alt="${zapa.modelo} de ${zapa.marca}">
        <div class="card-body">
            <h4 class="card-title">${zapa.marca} ${zapa.modelo}</h4>
            <p class = "marca">Marca: ${zapa.marca}</p>
            <p class="${zapa.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${zapa.precio}</p>
        <button id="agregarBtn${zapa.id}" class="btn btn-outline-success">Agregar al carrito</button>
        
        </div>
</div>`

        divproductos.appendChild(nuevazapa)
        let agregar = document.getElementById(`agregarBtn${zapa.id}`)
        agregar.addEventListener("click" ,() =>{
            carrito_add(zapa)
        })
    }
}

function filtrohombre(){
    console.log("hombres")
    console.log(catalogo)
    var hombres = catalogo.filter(zapa =>{
        
        return zapa.genero ==="Hombre"
   
    })
    console.log(hombres)
    divproductos.innerHTML = ""
    for(let zapa of hombres ){
        let nuevazapa = document.createElement("div")
        nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
        nuevazapa.innerHTML = `<div id="${zapa.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${zapa.imagen}" alt="${zapa.modelo} de ${zapa.marca}">
        <div class="card-body">
            <h4 class="card-title">${zapa.marca} ${zapa.modelo}</h4>
            <p class = "marca">Marca: ${zapa.marca}</p>
            <p class="${zapa.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${zapa.precio}</p>
        <button id="agregarBtn${zapa.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        
        divproductos.appendChild(nuevazapa)
        let agregar = document.getElementById(`agregarBtn${zapa.id}`)
        agregar.addEventListener("click" ,() =>{
            carrito_add(zapa)
        })
    }

}



function filtromujer(){
    var mujeres = catalogo.filter(zapa =>{
        return zapa.genero ==="Mujer"
        
    })
    divproductos.innerHTML = ""
    for(let zapa of mujeres ){
        let nuevazapa = document.createElement("div")
        nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
        nuevazapa.innerHTML = `<div id="${zapa.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${zapa.imagen}" alt="${zapa.modelo} de ${zapa.marca}">
        <div class="card-body">
            <h4 class="card-title">${zapa.marca} ${zapa.modelo}</h4>
            <p class = "marca">Marca: ${zapa.marca}</p>
            <p class="${zapa.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${zapa.precio}</p>
        <button id="agregarBtn${zapa.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        
        divproductos.appendChild(nuevazapa)
        let agregar = document.getElementById(`agregarBtn${zapa.id}`)
        agregar.addEventListener("click" ,() =>{
            carrito_add(zapa)
        })
    }

}


function carrito_add(zapa){
    zapasencarrito.push(zapa)
    localStorage.setItem("carrito", JSON.stringify(zapasencarrito))
    console.log(zapasencarrito)
    Swal.fire({
        // position: "top-end",
        title: "Ha agregado un producto",
        icon: "success",
        confirmButtonText: "Entendido",
        confirmButtonColor: "green",
        timer: 3000,
        text: ` Las ${zapa.marca} ${zapa.modelo} han sido agregadas a tu carrito`,
        imageUrl: `./entrega/images/${zapa.imagen}`,
        imageHeight: 200,
        imageAlt: `${zapa.marca} de ${zapa.modelo}`
    })
}


function totalprecio(array){
    let acumulador = 0
    acumulador = array.reduce((acc, zapacarrito)=>acc + zapacarrito.precio,0)
    return acumulador
    
   
}
function vercarrito(){
    Total(zapasencarrito)
    modalBodyCarrito.innerHTML = ""
    zapasencarrito.forEach((producto)=>{
        console.log(producto)
    modalBodyCarrito.innerHTML += `
        <div class="card border-primary mb-3" id ="productoCarrito${producto.id}" style="max-width: 540px;">
            <img class="card-img-top" height="300px" src="./entrega/images/${producto.imagen}" alt="${producto.modelo}">
            <div class="card-body">
                    <h4 class="card-title">${producto.marca}</h4>
                
                    <p class="card-text">$${producto.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${producto.id}"><i class="fas fa-trash-alt"></i></button>
                    
            </div>    
        </div>
`
    })
    // modalBodyCarrito.innerHTML += `Total $${Total(zapasencarrito)}`


   
    zapasencarrito.forEach((producto, indice)=>{
        //capturo elemento del DOM sin guardarlo en variable
        document.getElementById(`botonEliminar${producto.id}`).addEventListener("click",()=>{
           
           //Eliminar del DOM
           let cardProducto = document.getElementById(`productoCarrito${producto.id}`)
            cardProducto.remove()
           //Eliminar del array de comprar
           zapasencarrito.splice(indice, 1) 
           //Eliminar del storage
           localStorage.setItem('carrito', JSON.stringify(zapasencarrito))
           //vuelvo a calcular el total
           Total(zapasencarrito)
           console.log(Total(zapasencarrito))
           
        })
        Total(zapasencarrito)
    })}
function Total(array){
        let acumulador = 0
        acumulador = array.reduce((acc, zapacarrito)=>acc + zapacarrito.precio,0)
        console.log(acumulador)
        
        acumulador == 0 ? preciototal.innerHTML = `No hay productos en el carrito`: preciototal.innerHTML = `EL total de su carrito es de $${acumulador}`
    }
console.log(zapasencarrito.length)
function busqueda(){
        let busqueda = document.getElementById("buscador")
        console.log(busqueda)
        let marca = catalogo.find(
            (zapa)=> zapa.marca.toLowerCase() == busqueda.toLowerCase()
            )
            alert(marca)
      
        
       
        
        let nuevazapa = document.createElement("div")
                nuevazapa.classList.add("col-12", "col-md-6", "col-lg-4", "my-1", )
                nuevazapa.innerHTML = `<div id="${marca.id}" class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" style="height: 200px;"src="./entrega/images/${marca.imagen}" alt="${marca.modelo} de ${marca.marca}">
        <div class="card-body">
            <h4 class="card-title">${marca.marca} ${marca.modelo}</h4>
            <p class = "marca">Marca: ${marca.marca}</p>
            <p class="${marca.precio <= 50000 ? "oferta" : "precionormal"}">Precio: ${marca.precio}</p>
        <button id="agregarBtn${marca.id}" class="btn btn-outline-success">Agregar al carrito</button>
        </div>
</div>`
        
divproductos.appendChild(nuevazapa)
let agregar = document.getElementById(`agregarBtn${zapa.id}`)
agregar.addEventListener("click" ,() =>{
    carrito_add(zapa)
})
        }

            
function compraTotal(array){
            let acumulador = 0
            acumulador = carrito.reduce((acc, productoCarrito)=>acc + productoCarrito.precio,0)
            console.log(acumulador)
            acumulador == 0 ? divCompra.innerHTML = `No hay productos en el carrito`: divCompra.innerHTML = `EL total de su carrito es ${acumulador}`
        }
    

botonCarrito.addEventListener("click", ()=>{
    vercarrito()
})

botonmayor.addEventListener("click",()=>{
    mayoramenor()
} 
)

botonmenor.addEventListener("click",()=>{
    menoramayor()
} 
)

btnguardarzapa.addEventListener("click",()=>{
    agregarproductos()
})

finalizarcompra.addEventListener("click",()=>{
    let total1 = totalprecio(zapasencarrito)
    zapasencarrito.splice(0, zapasencarrito.length) 
    localStorage.setItem('carrito', JSON.stringify(zapasencarrito))
   
    Swal.fire({
        title: `Gracias por su Compra! Su total fue de $${total1}`,
        text: 'Vuelva pronto',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
})

hombre.addEventListener("click",()=>{
    filtrohombre()
} 
)
mujer.addEventListener("click",()=>{
    filtromujer()
} 
)
buscador.addEventListener("input", ()=>{buscar(buscador.value, catalogo)})

setTimeout(()=>{
    cargatexto.innerHTML = ""
    cargatexto.remove()
mostrarcatalogo(catalogo)

}, 2000)