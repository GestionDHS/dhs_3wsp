import ConfiguradorBloques from "../bloques/ConfiguradorBloques";

export default class ClassWorkspace {
    constructor(idElemento, tipo) {
        this.idElemento=idElemento,
        this.tipo=tipo,
        this.divWsp = document.getElementById(this.idElemento)
        this.configuradorBloques = new ConfiguradorBloques()
    }
    init(objetoConfig) {
        this.divWsp.innerHTML = ""
        this.divWsp.style.width = "100%"
        this.configInicialToolbox = objetoConfig
        this.workspace = Blockly.inject(this.idElemento, objetoConfig);
    }
    reconectar(){
        //cuando voy entre pestañas, al hacer display:none, se desvinculan los wsp con los divs
    }
    resaizear(newMesure) {
        //  const newWidth = "100%";
        //  const newHeight = "100%";
        //  this.workspaceHTML && Blockly.svgResize(this.workspaceHTML, newWidth, newHeight);
        //  this.workspaceCSS && Blockly.svgResize(this.workspaceCSS, newWidth, newHeight);
  
    }
    crearCategoriaToolbox(categoriaElegida, ordenJerarquicoBloques){
        categoriaElegida.tipos.forEach((cat) =>
            this.configuradorBloques.crearCategoriaToolbox(cat,this.tipo)
        );
        
        ordenJerarquicoBloques.forEach((bl) => {
          this.configuradorBloques.configurarUnBloqueCustomStandard(...bl,this.tipo);
        });
        return categoriaElegida
    }
    cargarBloquesSerializados(bloquesSerializados) {
        const state = Blockly.serialization.workspaces.save(this.workspace);
        return Blockly.serialization.workspaces.load(
          state,
          this.workspace)
     // return Blockly.serialization.workspaces.load(
    //   bloquesSerializados,
    //   this.workspaces[tipo].workspace)
    
      }
      setearYCargarBloquesIniciales(bloquesSerealizados) {
          this.bloquesIniciales = bloquesSerealizados;
          this.cargarBloquesSerializados(this.bloquesIniciales);
    }
}