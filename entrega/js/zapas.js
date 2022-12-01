class Zapatilla{
    constructor(id, marca, modelo, genero, color, precio, imagen){
        this.id = id,
        this.marca= marca,
        this.modelo = modelo,
        this.genero = genero,
        this.color = color,
        this.precio = precio
        this.imagen = imagen

    }
    

}


catalogo = []
const cargarcatalogo = async()=>{
    const response = await fetch("./entrega/js/zapas.json")
    console.log(response)
    const data = await response.json()
    console.log(data)
    
  

    for(let zapa of data){
        let zapatilla = new Zapatilla(zapa.id, zapa.marca, zapa.modelo,zapa.genero,zapa.color, zapa.precio, zapa.imagen)
        catalogo.push(zapatilla)
    }
    localStorage.setItem("catalogo", JSON.stringify(catalogo))
}
//inicializar estanteria con operador OR 
if(localStorage.getItem("catalogo")){
    console.log("el if")
    catalogo = JSON.parse(localStorage.getItem("catalogo"))
    console.log(catalogo)
   
}else{
    
    cargarcatalogo()
   
}


