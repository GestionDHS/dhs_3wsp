export class Dhs_Categorias {
  tipos = [
    {
      name: "Estructura",
      categorystyle: "structure",
    },
    {
      name: "Selectores",
      categorystyle: "structure",
    },
    {
      name: "Contenido",
      categorystyle: "content",
    },
    {
      name: "Propiedades",
      categorystyle: "content",
    },
    {
      name: "Contenedores",
      categorystyle: "boxes",
    },
    {
      name: "Valores",
      categorystyle: "values",
    },
    {
      name: "Sensores",
      categorystyle: "sensor",
    },
    {
      kind:"category",
      name:"Funciones",
      categorystyle:"procedure",
    },
  ];

  obtenerCategoriasNecesarias(arrayCategorias) {
    let categoria;
    let aux = [];
    arrayCategorias.forEach((stringABuscar) => {
      categoria = this.tipos.find((tipo) => stringABuscar == tipo.name);
      aux.push(categoria);
    });
    return { tipos: aux };
  }

}
