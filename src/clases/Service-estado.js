//Patron usado: Singleton y Store.
class Estado {
    static instance;
  
    constructor() {
        this.initialState = {
            HTML:{
                idWorkspaceInject:"",
                wsp:"",
                toolbox:"",
                JSONbloquesAlumno:""
            },
            CSS:{
                idWorkspaceInject:"",
                wsp:"",
                toolbox:"",
                JSONbloquesAlumno:""
            },
            JS:{
                idWorkspaceInject:"",
                wsp:"",
                toolbox:"",
                JSONbloquesAlumno:""
            }
        }
      if (!Estado.instance) {
        this.state = {...this.initialState};
        Estado.instance = this;
      } else {
        this.state = Estado.instance.state;
      }
    }
  
    getState(lenguaje) {
      return this.state[lenguaje];
    }
  
    setState(lenguaje, property, value) {
      this.state[lenguaje][property] = value;
    }
        
    update(lenguaje, key, value) {
      this.setState(lenguaje, key, value);
    }
  }

const miEstado = new Estado()
export default miEstado

