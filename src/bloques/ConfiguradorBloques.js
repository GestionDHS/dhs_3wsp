
import { DHS_Gallery } from '../clases/Dhs-galeria';
import {htmlGenerator} from '../generators/htmlGenerator';
import {cssGenerator} from '../generators/cssGenerator';
import Swal from "sweetalert2";

export default class ConfiguradorBloques {
    constructor() {
        this.toolboxHTML = {
            kind: "categoryToolbox",
            contents: []
        }
        this.toolboxCSS= {
          kind: "categoryToolbox",
          contents: []
      }
      this.toolboxJS = {
        kind: "categoryToolbox",
        contents: []
    }

        this.galeria = new DHS_Gallery
    }

    crearCategoriaToolbox(datosCategoria,tipo) {
      if(tipo==="HTML"){
        this.toolboxHTML.contents.push({
          kind: "category",
          name: datosCategoria.name,
          categorystyle: datosCategoria.categorystyle,
          contents: [],
      })
      }
  
      if(tipo==="CSS"){
        this.toolboxCSS.contents.push({
          kind: "category",
          name: datosCategoria.name,
          categorystyle: datosCategoria.categorystyle,
          contents: [],
      })}
  
      if(tipo==="JS"){
        this.toolboxJS.contents.push({
          kind: "category",
          name: datosCategoria.name,
          categorystyle: datosCategoria.categorystyle,
          contents: [],
      })
      }
       
    }

    configurarUnBloqueCustomStandard(keywordBloque, nombreCategoria = "Acciones",tipo) {
      if(tipo==="HTML"){
        if (!this[keywordBloque]) {
          throw new Error("No tenemos un método para configurar bloques que coincida con la keyowrd " + keywordBloque);
      }
      let categoriaBuscada = this.toolboxHTML.contents.find(obj => obj.kind == "category" && obj.name == nombreCategoria);
      if (!categoriaBuscada) {
          throw new Error("No existe la categoría " + nombreCategoria + " en la toolbox");
      } else {
          let generacionBloque = this[keywordBloque]();
          if (Array.isArray(generacionBloque)) {
              categoriaBuscada.contents.push(...generacionBloque);
          } else {
              categoriaBuscada.contents.push(generacionBloque)
          }
      }
      // console.log(this.toolboxHTML.contents)
      }
  
      if(tipo==="CSS"){
        if (!this[keywordBloque]) {
          throw new Error("No tenemos un método para configurar bloques que coincida con la keyowrd " + keywordBloque);
      }
      let categoriaBuscada = this.toolboxCSS.contents.find(obj => obj.kind == "category" && obj.name == nombreCategoria);
      if (!categoriaBuscada) {
          throw new Error("No existe la categoría " + nombreCategoria + " en la toolbox");
      } else {
          let generacionBloque = this[keywordBloque]();
          if (Array.isArray(generacionBloque)) {
              categoriaBuscada.contents.push(...generacionBloque);
          } else {
              categoriaBuscada.contents.push(generacionBloque)
          }
      }
      // console.log(this.toolboxCSS.contents)
    }
  
      if(tipo==="JS"){
        if (!this[keywordBloque]) {
          throw new Error("No tenemos un método para configurar bloques que coincida con la keyowrd " + keywordBloque);
      }
      let categoriaBuscada = this.toolboxJS.contents.find(obj => obj.kind == "category" && obj.name == nombreCategoria);
      if (!categoriaBuscada) {
          throw new Error("No existe la categoría " + nombreCategoria + " en la toolbox");
      } else {
          let generacionBloque = this[keywordBloque]();
          if (Array.isArray(generacionBloque)) {
              categoriaBuscada.contents.push(...generacionBloque);
          } else {
              categoriaBuscada.contents.push(generacionBloque)
          }
      }
      }
   
    }

    mostrarKeywords() {
        const methodNames = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
        const methods = [];
        const skip = ["constructor", "mostrarKeywords", "crearCategoriaToolbox", "configurarUnBloqueCustomStandard"]
        methodNames.forEach((methodName) => {
            if (typeof this[methodName] === 'function') {
                if (!skip.includes(methodName)) {
                    methods.push(methodName);
                }
            }
        });
        return methods;
    }

    // --- METODOS DE CONFIGURACION DE BLOQUE ---
    // C/U hace: 
    /*
        - Su definición
        - Su registro de "validación"
        - El seteo de su "statement to code" para Blockly.Javascript
        - Retorna el objeto (diccionario) que debe ser usado en Toolbox o un array de objetos (en caso de macro-keywords)
     */

    // BLOQUE "AL EJECUTAR"
// HTML
  structure_block(){ 
      Blockly.common.defineBlocksWithJsonArray([
        {
          "type": "structure_block",
          "message0": "MI PÁGINA %1 CONFIGURACIÓN %2 %3 CONTENIDO %4 %5",
          "args0": [
            {
              "type": "input_dummy"
            },
            {
              "type": "input_dummy"
            },
            {
              "type": "input_statement",
              "name": "configuracion"
            },
            {
              "type": "input_dummy"
            },
            {
              "type": "input_statement",
              "name": "contenido"
            }
          ],
          "style": "structure_blocks",
          "tooltip": "",
          "helpUrl": ""
        }
      ])

      return {
        type: "structure_block",
        kind: "block",
      }
  }

  title_block(){
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "title_block",
        "message0": "Título Pestaña %1",
        "args0": [
          {
            "type": "input_value",
            "name": "contenidoTitle",
            "text": "Mi título"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }])


      return {
        type: "title_block",
        kind: "block",
      }
  }

  link_block() {
    Blockly.common.defineBlocksWithJsonArray([
    {
      "type": "link_block",
      "message0": "Vincular hoja de estilos %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "link_options",
          "options": [
            [
              "style.css",
              "style.css"
            ]
          ]
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "style": "structure_blocks",
      "tooltip": "",
      "helpUrl": ""
      }
    ])
    return {
        type: "link_block",
        kind: "block",
    }
  }

  script_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "script_block",
        "message0": "Vincular programa %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "script_options",
            "options": [
              [
                "script.js",
                "script.js"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "structure_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "script_block",
        kind: "block",
    }
  }

  charset_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "charset_block",
        "message0": "Caracteres %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "charset_options",
            "options": [
              [
                "utf-8",
                "utf-8"
              ],
              [
                "ISO-8859-1",
                "ISO-8859-1"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "structure_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "charset_block",
        kind: "block",
    }
  }

  semantics_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "semantics_block",
        "message0": "Encabezado de Página %1 %2 Cuerpo Principal %3 %4 Pié de Página %5 %6",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "header"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "main"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "footer"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "boxes_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "semantics_block",
        kind: "block",
    }
  }

  boxes_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "boxes_block",
        "message0": "Caja tipo %1 %2 %3",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "tipoCaja",
            "options": [
              [
                "div",
                "div"
              ],
              [
                "section",
                "section"
              ],
              [
                "article",
                "article"
              ],
            ]
          },
          {   
            "type": "input_dummy"  
          },
          {
            "type": "input_statement",
            "name": "contenidoCaja",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "boxes_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "boxes_block",
        kind: "block",
    }
  }

  paragraph_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "paragraph_block",
        "message0": "PÁRRAFO %1",
        "args0": [
          {
            "type": "input_value",
            "name": "contenidoParrafo",
            "check": "String"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "paragraph_block",
        kind: "block",
    }
  }

  paragraph_link_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "paragraph_link_block",
        "message0": "TEXTO CON ENLACE %1 Comienzo del texto %2 %3 Final del texto %4",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "startText",
          },
          {
            "type": "input_statement",
            "name": "anchor",
          },
          {
            "type": "input_value",
            "name": "endText",
          },
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "paragraph_link_block",
        kind: "block",
    }
  }

  headings_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "headings_block",
        "message0": "ENCABEZADO NIVEL %1 %2",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "nivelEncabezado",
            "options": [
              [
                "h1",
                "h1"
              ],
              [
                "h2",
                "h2"
              ],
              [
                "h3",
                "h3"
              ],
              [
                "h4",
                "h4"
              ],
              [
                "h5",
                "h5"
              ],
              [
                "h6",
                "h6"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "contenidoEncabezado"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "headings_block",
        kind: "block",
    }
  }

  image_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "image_block",
        "message0": "IMAGEN %1 Ruta %2 Texto Alternativo %3",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "src_value",
          },
          {
            "type": "input_value",
            "name": "alt_value",
          },
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "image_block",
        kind: "block",
    }
  }

  anchor_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "anchor_block",
        "message0": "ENLACE %1 Referencia %2 Contenido a mostrar %3 Abrir en nueva pestaña %4",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "href_value",
          },
          {
            "type": "input_value",
            "name": "text_value",
          },
          {
            "type": "field_checkbox",
            "name": "target_value",
            "checked": true
          },
          
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "anchor_block",
        kind: "block",
    }
  }

  button_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "button_block",
        "message0": "BOTÓN %1 Acción %2 Contenido a mostrar %3 ",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "onclick",
          },
          {
            "type": "input_value",
            "name": "buttonValue",
          },
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "button_block",
        kind: "block",
    }
  }
  
  input_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "input_block",
        "message0": "CAMPO DE ENTRADA %1 Leyenda %2 Tipo %3 Pista %4",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "inputlabel",
          },
          {
            "type": "input_value",
            "name": "inputtype",
          },
          {
            "type": "input_value",
            "name": "inputplaceholder",
          },
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "input_block",
        kind: "block",
    }
  }

  list_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "list_block",
        "message0": "LISTA %1 %2 %3",
        "args0": [
            {
            "type": "field_dropdown",
            "name": "tipoLista",
            "options": [
              [
                "ORDENADA",
                "ol"
              ],
              [
                "NO ORDENADA",
                "ul"
              ],
            ]
          },
          {   
            "type": "input_dummy"  
          },
          {
            "type": "input_statement",
            "name": "items",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "list_block",
        kind: "block",
    }
  }

  select_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "select_block",
        "message0": "MENÚ DE OPCIONES %1 %2",
        "args0": [
            {   
            "type": "input_dummy"  
            },
            {
            "type": "input_statement",
            "name": "options",
            },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "select_block",
        kind: "block",
    }
  }

  option_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "option_block",
        "message0": "Opción %1",
        "args0": [
          {
            "type": "input_value",
            "name": "contenidoOpcion",
            "check": "String"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "option_block",
        kind: "block",
    }
  }

  listItem_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "listItem_block",
        "message0": "Ítem %1",
        "args0": [
          {
            "type": "input_value",
            "name": "contenidoItem",
            "check": "String"
          }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "listItem_block",
        kind: "block",
    }
  }

  inputType_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "inputType_dropdown_block",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "inputType",
            "options": [
              [
                "texto",
                "text"
              ],
              [
                "número",
                "number"
              ],
              [
                "e-mail",
                "email"
              ],
              [
                "contraseña",
                "password"
              ],
              [
                "fecha",
                "date"
              ],
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "inputType_dropdown_block",
        kind: "block",
    }
  }

  // CSS
  styles_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "styles_block",
        "message0": "MIS ESTILOS %1 %2",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_statement",
            "name": "todosLosEstilos",
          },
        ],
        "style": "structure_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "styles_block",
        kind: "block",
    }
  }
  
  selector_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "selector_block",
        "message0": "Seleccionar los elementos %1 y aplicar los siguientes estilos %2 %3 ",
        "args0": [
          {
            "type": "input_value",
            "name": "selector"
          },
          
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "propiedades"
          },

        ],
        "previousStatement": null,
        "nextStatement": null,
        "inputsInline": false,
        "style": "structure_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "selector_block",
        kind: "block",
    }
  }

  selector_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "selector_dropdown_block",
        "message0": "%1",
        "args0": [
 
          {
            "type": "field_dropdown",
            "name": "selector",
            "options": [
              [
                "h1",
                "h1"
              ],
              [
                "h2",
                "h2"
              ],
              [
                "h3",
                "h3"
              ],
              [
                "h4",
                "h4"
              ],
              [
                "h5",
                "h5"
              ],
              [
                "h6",
                "h6"
              ],
              [
                "p",
                "p"
              ],
              [
                "body",
                "body"
              ]
              
              
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "structure_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "selector_dropdown_block",
        kind: "block",
    }
  }

  property_color_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_color_block",
        "message0": "Color de letra %1",
        "args0": [
          {
            "type": "input_value",
            "name": "valueColor",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_color_block",
        kind: "block",
    }
  }
 
  property_backgroundcolor_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_backgroundcolor_block",
        "message0": "Color de fondo %1",
        "args0": [
          {
            "type": "input_value",
            "name": "valueColor",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_backgroundcolor_block",
        kind: "block",
    }
  }

  property_backgroundImage_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_backgroundImage_block",
        "message0": "IMAGEN DE FONDO %1 URL %2 Tamaño %3 Repetir en mosaico %4 %5 Fijar posición %6",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "urlValue",
          },
          {
            "type": "input_value",
            "name": "size",
          },
          {
            "type": "field_checkbox",
            "name": "repeat",
            "checked": true
          },
          {
            "type": "input_dummy",
          },
          {
            "type": "field_checkbox",
            "name": "fixed",
            "checked": true
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_backgroundImage_block",
        kind: "block",
    }
  }

  property_border_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_border_block",
        "message0": "BORDE %1 Grosor %2 Tipo %3 Color %4",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "widthValue",
          },
          {
            "type": "input_value",
            "name": "typeValue",
          },
          {
            "type": "input_value",
            "name": "colorValue",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_border_block",
        kind: "block",
    }
  }

  property_grid_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_grid_block",
        "message0": "COLUMNAS %1 Distribución %2 Aplicar separación %3",
        "args0": [
          {
            "type": "input_dummy",
          },
          {
            "type": "input_value",
            "name": "gridColumns",
          },
          {
            "type": "input_value",
            "name": "gap",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_grid_block",
        kind: "block",
    }
  }

  property_listStyle_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_listStyle_block",
        "message0": "Estilo de viñeta %1",
        "args0": [
          {
            "type": "input_value",
            "name": "listStyleValue",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_listStyle_block",
        kind: "block",
    }
  }

  property_fontStyle_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_fontStyle_block",
        "message0": "ESTILO DE LETRA %1 Cursiva %2 %3 Negrita %4",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "cursive",
            "checked": false
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "field_checkbox",
            "name": "bold",
            "checked": false
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_fontStyle_block",
        kind: "block",
    }
  }

  property_fontFamily_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_fontFamily_block",
        "message0": "Tipografía %1",
        "args0": [
          {
            "type": "input_value",
            "name": "fontFamilyValue",
          },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_fontFamily_block",
        kind: "block",
    }
  }
  
  property_textDecoration_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_textDecoration_block",
        "message0": "ESTILO SUBRAYADO %1",
        "args0": [
          {
            "type": "input_value",
            "name": "decorationType",
          },
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "style": "content_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "property_textDecoration_block",
        kind: "block",
    }
  }

  textDecoration_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "textDecoration_dropdown_block",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "decoration",
            "options": [
              [
                "underline",
                "underline"
              ],
              [
                "overline",
                "overline"
              ],
              [
                "line-through",
                "line-through"
              ],
              [
                "underline overline",
                "underline overline"
              ],
            ]
          },
        ],
        "inputsInline": false,
        // "previousStatement": null,
        // "nextStatement": null,
        "output": null,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "textDecoration_dropdown_block",
        kind: "block",
    }
  }

  listStyle_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "listStyle_dropdown_block",
        "message0": "%1",
        "args0": [
 
          {
            "type": "field_dropdown",
            "name": "listStyle",
            "options": [
              [
                "disc",
                "disc"
              ],
              [
                "circle",
                "circle"
              ],
              [
                "square",
                "square"
              ],
              [
                "none",
                "none"
              ],              
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "listStyle_dropdown_block",
        kind: "block",
    }
  }

  bSize_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "bSize_dropdown_block",
        "message0": "%1",
        "args0": [
 
          {
            "type": "field_dropdown",
            "name": "bSize",
            "options": [
              [
                "Cubrir pantalla",
                "cover"
              ],
              [
                "100% ancho 100% alto",
                "100% 100%"
              ],
              [
                "Contener",
                "contain"
              ],            
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "bSize_dropdown_block",
        kind: "block",
    }
  }

  fontFamily_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "fontFamily_dropdown_block",
        "message0": "%1",
        "args0": [
 
          {
            "type": "field_dropdown",
            "name": "fontFamily",
            "options": [
              [
                "Arial",
                "arial"
              ],
              [
                "Comic Sans",
                "comicsans"
              ],
              [
                "Times New Roman",
                "timesnewroman"
              ],
              [
                "Verdana",
                "verdana"
              ], 
              [
                "Lucida Sans",
                "lucidasans"
              ],
              [
                "Franklin Gothic Medium",
                "franklingothicmedium"
              ],
              [
                "Courier New",
                "couriernew"
              ],
              [
                "Gill Sans",
                "gillsans"
              ],
              [
                "Segoe UI",
                "segoeui"
              ],
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "fontFamily_dropdown_block",
        kind: "block",
    }
  }

  number_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "number_dropdown_block",
        "message0": "%1 %2",
        "args0": [
          {
            'type': 'field_input',
            'name': 'number',
            'check': "Number"
          },
          {
            "type": "field_dropdown",
            "name": "unidad",
            "options": [
              [
                "px",
                "px"
              ],
              [
                "%",
                "%"
              ],
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "number_dropdown_block",
        kind: "block",
    }
  }

  border_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "border_dropdown_block",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "borderType",
            "options": [
              [
                "solid",
                "solid"
              ],
              [
                "double",
                "double"
              ],
              [
                "dotted",
                "dotted"
              ],
              [
                "dashed",
                "dashed"
              ],
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "border_dropdown_block",
        kind: "block",
    }
  }

  color_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "color_dropdown_block",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "color",
            "options": [
              [
                "Negro",
                "black"
              ],
              [
                "Blanco",
                "white"
              ],
              [
                "Rojo",
                "red"
              ],
              [
                "Lima",
                "lime"
              ],
              [
                "Azul",
                "blue"
              ],
              [
                "Amarillo",
                "yellow"
              ],
              [
                "Cian",
                "cyan"
              ],
              [
                "Magenta",
                "magenta"
              ],
              [
                "Plata",
                "silver"
              ],
              [
                "Gris",
                "gray"
              ],
              [
                "Granate",
                "maroon"
              ],
              [
                "Oliva",
                "olive"
              ],
              [
                "Verde",
                "green"
              ],
              [
                "Púrpura",
                "purple"
              ],
              [
                "Verde azulado",
                "teal"
              ],
              [
                "Azul marino",
                "navy"
              ],
              [
                "Naranja",
                "orange"
              ],
              [
                "Rosa",
                "pink"
              ],
              [
                "Marrón",
                "brown"
              ],
              [
                "Dorado",
                "gold"
              ]
            ]
            
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "color_dropdown_block",
        kind: "block",
    }
  }

  // colorRGB_dropdown_block() {
  //   Blockly.common.defineBlocksWithJsonArray([
  //     {
  //       "type": "colorRGB_dropdown_block",
  //       "message0": "R (%1) G(%2) B(%3)",
  //       "args0": [
  //         {
  //           "type": "field_dropdown",
  //           "name": "colorR",
  //         },
  //         {
  //           "type": "field_dropdown",
  //           "name": "colorG",
  //         },
  //         {
  //           "type": "field_dropdown",
  //           "name": "colorB",
  //         },

  //       ],
  //       "output": null,
  //       // "inputsInline": false,
  //       "style": "values_blocks",
  //       "tooltip": "",
  //       "helpUrl": ""
  //     }
  //   ])
  //   return {
  //       type: "colorRGB_dropdown_block",
  //       kind: "block",
  //   }
  // }

  grid_dropdown_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "grid_dropdown_block",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "columns",
            "options": [
              [
                "1/2 1/2",
                "1fr 1fr"
              ],
              [
                "1/3 1/3 1/3",
                "1fr 1fr 1fr"
              ],
              [
                "1/3 2/3",
                "1fr 2fr"
              ],
              [
                "2/3 1/3",
                "2fr 1fr"
              ],
            ]
          },

        ],
        "output": null,
        // "inputsInline": false,
        "style": "values_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "grid_dropdown_block",
        kind: "block",
    }
  }

  //otros
  label_listas() {

    return {
      kind: "label",
      text: "Listas"
    }
  }

  label_formularios() {

    return {
      kind: "label",
      text: "Formularios"
    }
  }

  label_multimedia() {

    return {
      kind: "label",
      text: "Multimedia"
    }
  }

  label_textos() {

    return {
      kind: "label",
      text: "Textos"
    }
  }

  plaintext_block(){ 
    Blockly.common.defineBlocksWithJsonArray([
      {
        'type': 'plaintext_block',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_input',
            'name': 'content',
            'text': '',
          },
        ],
        'output': "String",
        'style': 'values_blocks',
        'extensions': ['parent_tooltip_when_inline'],
      },
   ])
  
      return {
        type: "plaintext_block",
        kind: "block",
    }
  }

  url_block(){ 
    Blockly.common.defineBlocksWithJsonArray([
      {
        'type': 'url_block',
        'message0': '%1',
        'args0': [
          {
            'type': 'field_input',
            'name': 'url',
            'text': 'https://...',
          },
        ],
        'output': null,
        'style': 'values_blocks',
        'extensions': ['parent_tooltip_when_inline'],
      },
   ])
  
      return {
        type: "url_block",
        kind: "block",
    }
  }

  colorPicker_block() { 
    Blockly.Blocks['colorPicker_block'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("color:")
          .appendField(new Blockly.FieldLabelSerializable(""), "colorElegido")
          .appendField(new Blockly.FieldImage(
            "https://cdn-icons-png.flaticon.com/512/64/64673.png",
            15,
            15,
            "*",
            function () {
                Swal.fire({
                title: "Color Picker",
                text: "Elige un color:",
                html: `
                  <input id="swal-input1" type="color" style="width:100px; height:50px" value="${this.getSourceBlock().getFieldValue('colorElegido')}">
                `,
                focusConfirm: false,
                showCancelButton: true,
                preConfirm: () => {
                  let color = document.getElementById("swal-input1").value;
                  this.getSourceBlock().inputList[0].fieldRow[1].setValue(color)
                }
              });
            }))
          this.setStyle("values_blocks")
          this.setOutput(true)
        }
    };
      
    return {
      kind: 'block',
      type: 'colorPicker_block',
    }
  }

  colorRGB_block() { 

      Blockly.Blocks['colorRGB_block'] = {
        init: function () {
          this.appendDummyInput()
            .appendField("R")
            .appendField(new Blockly.FieldDropdown([
              [
                "0",
                "0"
              ],
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ],
              [
                "16",
                "16"
              ],
              [
                "17",
                "17"
              ],
              [
                "18",
                "18"
              ],
              [
                "19",
                "19"
              ],
              [
                "20",
                "20"
              ],
              [
                "21",
                "21"
              ],
              [
                "22",
                "22"
              ],
              [
                "23",
                "23"
              ],
              [
                "24",
                "24"
              ],
              [
                "25",
                "25"
              ],
              [
                "26",
                "26"
              ],
              [
                "27",
                "27"
              ],
              [
                "28",
                "28"
              ],
              [
                "29",
                "29"
              ],
              [
                "30",
                "30"
              ],
              [
                "31",
                "31"
              ],
              [
                "32",
                "32"
              ],
              [
                "33",
                "33"
              ],
              [
                "34",
                "34"
              ],
              [
                "35",
                "35"
              ],
              [
                "36",
                "36"
              ],
              [
                "37",
                "37"
              ],
              [
                "38",
                "38"
              ],
              [
                "39",
                "39"
              ],
              [
                "40",
                "40"
              ],
              [
                "41",
                "41"
              ],
              [
                "42",
                "42"
              ],
              [
                "43",
                "43"
              ],
              [
                "44",
                "44"
              ],
              [
                "45",
                "45"
              ],
              [
                "46",
                "46"
              ],
              [
                "47",
                "47"
              ],
              [
                "48",
                "48"
              ],
              [
                "49",
                "49"
              ],
              [
                "50",
                "50"
              ],
              [
                "51",
                "51"
              ],
              [
                "52",
                "52"
              ],
              [
                "53",
                "53"
              ],
              [
                "54",
                "54"
              ],
              [
                "55",
                "55"
              ],
              [
                "56",
                "56"
              ],
              [
                "57",
                "57"
              ],
              [
                "58",
                "58"
              ],
              [
                "59",
                "59"
              ],
              [
                "60",
                "60"
              ],
              [
                "61",
                "61"
              ],
              [
                "62",
                "62"
              ],
              [
                "63",
                "63"
              ],
              [
                "64",
                "64"
              ],
              [
                "65",
                "65"
              ],
              [
                "66",
                "66"
              ],
              [
                "67",
                "67"
              ],
              [
                "68",
                "68"
              ],
              [
                "69",
                "69"
              ],
              [
                "70",
                "70"
              ],
              [
                "71",
                "71"
              ],
              [
                "72",
                "72"
              ],
              [
                "73",
                "73"
              ],
              [
                "74",
                "74"
              ],
              [
                "75",
                "75"
              ],
              [
                "76",
                "76"
              ],
              [
                "77",
                "77"
              ],
              [
                "78",
                "78"
              ],
              [
                "79",
                "79"
              ],
              [
                "80",
                "80"
              ],
              [
                "81",
                "81"
              ],
              [
                "82",
                "82"
              ],
              [
                "83",
                "83"
              ],
              [
                "84",
                "84"
              ],
              [
                "85",
                "85"
              ],
              [
                "86",
                "86"
              ],
              [
                "87",
                "87"
              ],
              [
                "88",
                "88"
              ],
              [
                "89",
                "89"
              ],
              [
                "90",
                "90"
              ],
              [
                "91",
                "91"
              ],
              [
                "92",
                "92"
              ],
              [
                "93",
                "93"
              ],
              [
                "94",
                "94"
              ],
              [
                "95",
                "95"
              ],
              [
                "96",
                "96"
              ],
              [
                "97",
                "97"
              ],
              [
                "98",
                "98"
              ],
              [
                "99",
                "99"
              ],
              [
                "100",
                "100"
              ],
              [
                "101",
                "101"
              ],
              [
                "102",
                "102"
              ],
              [
                "103",
                "103"
              ],
              [
                "104",
                "104"
              ],
              [
                "105",
                "105"
              ],
              [
                "106",
                "106"
              ],
              [
                "107",
                "107"
              ],
              [
                "108",
                "108"
              ],
              [
                "109",
                "109"
              ],
              [
                "110",
                "110"
              ],
              [
                "111",
                "111"
              ],
              [
                "112",
                "112"
              ],
              [
                "113",
                "113"
              ],
              [
                "114",
                "114"
              ],
              [
                "115",
                "115"
              ],
              [
                "116",
                "116"
              ],
              [
                "117",
                "117"
              ],
              [
                "118",
                "118"
              ],
              [
                "119",
                "119"
              ],
              [
                "120",
                "120"
              ],
              [
                "121",
                "121"
              ],
              [
                "122",
                "122"
              ],
              [
                "123",
                "123"
              ],
              [
                "124",
                "124"
              ],
              [
                "125",
                "125"
              ],
              [
                "126",
                "126"
              ],
              [
                "127",
                "127"
              ],
              [
                "128",
                "128"
              ],
              [
                "129",
                "129"
              ],
              [
                "130",
                "130"
              ],
              [
                "131",
                "131"
              ],
              [
                "132",
                "132"
              ],
              [
                "133",
                "133"
              ],
              [
                "134",
                "134"
              ],
              [
                "135",
                "135"
              ],
              [
                "136",
                "136"
              ],
              [
                "137",
                "137"
              ],
              [
                "138",
                "138"
              ],
              [
                "139",
                "139"
              ],
              [
                "140",
                "140"
              ],
              [
                "141",
                "141"
              ],
              [
                "142",
                "142"
              ],
              [
                "143",
                "143"
              ],
              [
                "144",
                "144"
              ],
              [
                "145",
                "145"
              ],
              [
                "146",
                "146"
              ],
              [
                "147",
                "147"
              ],
              [
                "148",
                "148"
              ],
              [
                "149",
                "149"
              ],
              [
                "150",
                "150"
              ],
              [
                "151",
                "151"
              ],
              [
                "152",
                "152"
              ],
              [
                "153",
                "153"
              ],
              [
                "154",
                "154"
              ],
              [
                "155",
                "155"
              ],
              [
                "156",
                "156"
              ],
              [
                "157",
                "157"
              ],
              [
                "158",
                "158"
              ],
              [
                "159",
                "159"
              ],
              [
                "160",
                "160"
              ],
              [
                "161",
                "161"
              ],
              [
                "162",
                "162"
              ],
              [
                "163",
                "163"
              ],
              [
                "164",
                "164"
              ],
              [
                "165",
                "165"
              ],
              [
                "166",
                "166"
              ],
              [
                "167",
                "167"
              ],
              [
                "168",
                "168"
              ],
              [
                "169",
                "169"
              ],
              [
                "170",
                "170"
              ],
              [
                "171",
                "171"
              ],
              [
                "172",
                "172"
              ],
              [
                "173",
                "173"
              ],
              [
                "174",
                "174"
              ],
              [
                "175",
                "175"
              ],
              [
                "176",
                "176"
              ],
              [
                "177",
                "177"
              ],
              [
                "178",
                "178"
              ],
              [
                "179",
                "179"
              ],
              [
                "180",
                "180"
              ],
              [
                "181",
                "181"
              ],
              [
                "182",
                "182"
              ],
              [
                "183",
                "183"
              ],
              [
                "184",
                "184"
              ],
              [
                "185",
                "185"
              ],
              [
                "186",
                "186"
              ],
              [
                "187",
                "187"
              ],
              [
                "188",
                "188"
              ],
              [
                "189",
                "189"
              ],
              [
                "190",
                "190"
              ],
              [
                "191",
                "191"
              ],
              [
                "192",
                "192"
              ],
              [
                "193",
                "193"
              ],
              [
                "194",
                "194"
              ],
              [
                "195",
                "195"
              ],
              [
                "196",
                "196"
              ],
              [
                "197",
                "197"
              ],
              [
                "198",
                "198"
              ],
              [
                "199",
                "199"
              ],
              [
                "200",
                "200"
              ],
              [
                "201",
                "201"
              ],
              [
                "202",
                "202"
              ],
              [
                "203",
                "203"
              ],
              [
                "204",
                "204"
              ],
              [
                "205",
                "205"
              ],
              [
                "206",
                "206"
              ],
              [
                "207",
                "207"
              ],
              [
                "208",
                "208"
              ],
              [
                "209",
                "209"
              ],
              [
                "210",
                "210"
              ],
              [
                "211",
                "211"
              ],
              [
                "212",
                "212"
              ],
              [
                "213",
                "213"
              ],
              [
                "214",
                "214"
              ],
              [
                "215",
                "215"
              ],
              [
                "216",
                "216"
              ],
              [
                "217",
                "217"
              ],
              [
                "218",
                "218"
              ],
              [
                "219",
                "219"
              ],
              [
                "220",
                "220"
              ],
              [
                "221",
                "221"
              ],
              [
                "222",
                "222"
              ],
              [
                "223",
                "223"
              ],
              [
                "224",
                "224"
              ],
              [
                "225",
                "225"
              ],
              [
                "226",
                "226"
              ],
              [
                "227",
                "227"
              ],
              [
                "228",
                "228"
              ],
              [
                "229",
                "229"
              ],
              [
                "230",
                "230"
              ],
              [
                "231",
                "231"
              ],
              [
                "232",
                "232"
              ],
              [
                "233",
                "233"
              ],
              [
                "234",
                "234"
              ],
              [
                "235",
                "235"
              ],
              [
                "236",
                "236"
              ],
              [
                "237",
                "237"
              ],
              [
                "238",
                "238"
              ],
              [
                "239",
                "239"
              ],
              [
                "240",
                "240"
              ],
              [
                "241",
                "241"
              ],
              [
                "242",
                "242"
              ],
              [
                "243",
                "243"
              ],
              [
                "244",
                "244"
              ],
              [
                "245",
                "245"
              ],
              [
                "246",
                "246"
              ],
              [
                "247",
                "247"
              ],
              [
                "248",
                "248"
              ],
              [
                "249",
                "249"
              ],
              [
                "250",
                "250"
              ],
              [
                "251",
                "251"
              ],
              [
                "252",
                "252"
              ],
              [
                "253",
                "253"
              ],
              [
                "254",
                "254"
              ],
              [
                "255",
                "255"
              ]
            ]), 'colorR')
            .appendField("G")
            .appendField(new Blockly.FieldDropdown([
              [
                "0",
                "0"
              ],
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ],
              [
                "16",
                "16"
              ],
              [
                "17",
                "17"
              ],
              [
                "18",
                "18"
              ],
              [
                "19",
                "19"
              ],
              [
                "20",
                "20"
              ],
              [
                "21",
                "21"
              ],
              [
                "22",
                "22"
              ],
              [
                "23",
                "23"
              ],
              [
                "24",
                "24"
              ],
              [
                "25",
                "25"
              ],
              [
                "26",
                "26"
              ],
              [
                "27",
                "27"
              ],
              [
                "28",
                "28"
              ],
              [
                "29",
                "29"
              ],
              [
                "30",
                "30"
              ],
              [
                "31",
                "31"
              ],
              [
                "32",
                "32"
              ],
              [
                "33",
                "33"
              ],
              [
                "34",
                "34"
              ],
              [
                "35",
                "35"
              ],
              [
                "36",
                "36"
              ],
              [
                "37",
                "37"
              ],
              [
                "38",
                "38"
              ],
              [
                "39",
                "39"
              ],
              [
                "40",
                "40"
              ],
              [
                "41",
                "41"
              ],
              [
                "42",
                "42"
              ],
              [
                "43",
                "43"
              ],
              [
                "44",
                "44"
              ],
              [
                "45",
                "45"
              ],
              [
                "46",
                "46"
              ],
              [
                "47",
                "47"
              ],
              [
                "48",
                "48"
              ],
              [
                "49",
                "49"
              ],
              [
                "50",
                "50"
              ],
              [
                "51",
                "51"
              ],
              [
                "52",
                "52"
              ],
              [
                "53",
                "53"
              ],
              [
                "54",
                "54"
              ],
              [
                "55",
                "55"
              ],
              [
                "56",
                "56"
              ],
              [
                "57",
                "57"
              ],
              [
                "58",
                "58"
              ],
              [
                "59",
                "59"
              ],
              [
                "60",
                "60"
              ],
              [
                "61",
                "61"
              ],
              [
                "62",
                "62"
              ],
              [
                "63",
                "63"
              ],
              [
                "64",
                "64"
              ],
              [
                "65",
                "65"
              ],
              [
                "66",
                "66"
              ],
              [
                "67",
                "67"
              ],
              [
                "68",
                "68"
              ],
              [
                "69",
                "69"
              ],
              [
                "70",
                "70"
              ],
              [
                "71",
                "71"
              ],
              [
                "72",
                "72"
              ],
              [
                "73",
                "73"
              ],
              [
                "74",
                "74"
              ],
              [
                "75",
                "75"
              ],
              [
                "76",
                "76"
              ],
              [
                "77",
                "77"
              ],
              [
                "78",
                "78"
              ],
              [
                "79",
                "79"
              ],
              [
                "80",
                "80"
              ],
              [
                "81",
                "81"
              ],
              [
                "82",
                "82"
              ],
              [
                "83",
                "83"
              ],
              [
                "84",
                "84"
              ],
              [
                "85",
                "85"
              ],
              [
                "86",
                "86"
              ],
              [
                "87",
                "87"
              ],
              [
                "88",
                "88"
              ],
              [
                "89",
                "89"
              ],
              [
                "90",
                "90"
              ],
              [
                "91",
                "91"
              ],
              [
                "92",
                "92"
              ],
              [
                "93",
                "93"
              ],
              [
                "94",
                "94"
              ],
              [
                "95",
                "95"
              ],
              [
                "96",
                "96"
              ],
              [
                "97",
                "97"
              ],
              [
                "98",
                "98"
              ],
              [
                "99",
                "99"
              ],
              [
                "100",
                "100"
              ],
              [
                "101",
                "101"
              ],
              [
                "102",
                "102"
              ],
              [
                "103",
                "103"
              ],
              [
                "104",
                "104"
              ],
              [
                "105",
                "105"
              ],
              [
                "106",
                "106"
              ],
              [
                "107",
                "107"
              ],
              [
                "108",
                "108"
              ],
              [
                "109",
                "109"
              ],
              [
                "110",
                "110"
              ],
              [
                "111",
                "111"
              ],
              [
                "112",
                "112"
              ],
              [
                "113",
                "113"
              ],
              [
                "114",
                "114"
              ],
              [
                "115",
                "115"
              ],
              [
                "116",
                "116"
              ],
              [
                "117",
                "117"
              ],
              [
                "118",
                "118"
              ],
              [
                "119",
                "119"
              ],
              [
                "120",
                "120"
              ],
              [
                "121",
                "121"
              ],
              [
                "122",
                "122"
              ],
              [
                "123",
                "123"
              ],
              [
                "124",
                "124"
              ],
              [
                "125",
                "125"
              ],
              [
                "126",
                "126"
              ],
              [
                "127",
                "127"
              ],
              [
                "128",
                "128"
              ],
              [
                "129",
                "129"
              ],
              [
                "130",
                "130"
              ],
              [
                "131",
                "131"
              ],
              [
                "132",
                "132"
              ],
              [
                "133",
                "133"
              ],
              [
                "134",
                "134"
              ],
              [
                "135",
                "135"
              ],
              [
                "136",
                "136"
              ],
              [
                "137",
                "137"
              ],
              [
                "138",
                "138"
              ],
              [
                "139",
                "139"
              ],
              [
                "140",
                "140"
              ],
              [
                "141",
                "141"
              ],
              [
                "142",
                "142"
              ],
              [
                "143",
                "143"
              ],
              [
                "144",
                "144"
              ],
              [
                "145",
                "145"
              ],
              [
                "146",
                "146"
              ],
              [
                "147",
                "147"
              ],
              [
                "148",
                "148"
              ],
              [
                "149",
                "149"
              ],
              [
                "150",
                "150"
              ],
              [
                "151",
                "151"
              ],
              [
                "152",
                "152"
              ],
              [
                "153",
                "153"
              ],
              [
                "154",
                "154"
              ],
              [
                "155",
                "155"
              ],
              [
                "156",
                "156"
              ],
              [
                "157",
                "157"
              ],
              [
                "158",
                "158"
              ],
              [
                "159",
                "159"
              ],
              [
                "160",
                "160"
              ],
              [
                "161",
                "161"
              ],
              [
                "162",
                "162"
              ],
              [
                "163",
                "163"
              ],
              [
                "164",
                "164"
              ],
              [
                "165",
                "165"
              ],
              [
                "166",
                "166"
              ],
              [
                "167",
                "167"
              ],
              [
                "168",
                "168"
              ],
              [
                "169",
                "169"
              ],
              [
                "170",
                "170"
              ],
              [
                "171",
                "171"
              ],
              [
                "172",
                "172"
              ],
              [
                "173",
                "173"
              ],
              [
                "174",
                "174"
              ],
              [
                "175",
                "175"
              ],
              [
                "176",
                "176"
              ],
              [
                "177",
                "177"
              ],
              [
                "178",
                "178"
              ],
              [
                "179",
                "179"
              ],
              [
                "180",
                "180"
              ],
              [
                "181",
                "181"
              ],
              [
                "182",
                "182"
              ],
              [
                "183",
                "183"
              ],
              [
                "184",
                "184"
              ],
              [
                "185",
                "185"
              ],
              [
                "186",
                "186"
              ],
              [
                "187",
                "187"
              ],
              [
                "188",
                "188"
              ],
              [
                "189",
                "189"
              ],
              [
                "190",
                "190"
              ],
              [
                "191",
                "191"
              ],
              [
                "192",
                "192"
              ],
              [
                "193",
                "193"
              ],
              [
                "194",
                "194"
              ],
              [
                "195",
                "195"
              ],
              [
                "196",
                "196"
              ],
              [
                "197",
                "197"
              ],
              [
                "198",
                "198"
              ],
              [
                "199",
                "199"
              ],
              [
                "200",
                "200"
              ],
              [
                "201",
                "201"
              ],
              [
                "202",
                "202"
              ],
              [
                "203",
                "203"
              ],
              [
                "204",
                "204"
              ],
              [
                "205",
                "205"
              ],
              [
                "206",
                "206"
              ],
              [
                "207",
                "207"
              ],
              [
                "208",
                "208"
              ],
              [
                "209",
                "209"
              ],
              [
                "210",
                "210"
              ],
              [
                "211",
                "211"
              ],
              [
                "212",
                "212"
              ],
              [
                "213",
                "213"
              ],
              [
                "214",
                "214"
              ],
              [
                "215",
                "215"
              ],
              [
                "216",
                "216"
              ],
              [
                "217",
                "217"
              ],
              [
                "218",
                "218"
              ],
              [
                "219",
                "219"
              ],
              [
                "220",
                "220"
              ],
              [
                "221",
                "221"
              ],
              [
                "222",
                "222"
              ],
              [
                "223",
                "223"
              ],
              [
                "224",
                "224"
              ],
              [
                "225",
                "225"
              ],
              [
                "226",
                "226"
              ],
              [
                "227",
                "227"
              ],
              [
                "228",
                "228"
              ],
              [
                "229",
                "229"
              ],
              [
                "230",
                "230"
              ],
              [
                "231",
                "231"
              ],
              [
                "232",
                "232"
              ],
              [
                "233",
                "233"
              ],
              [
                "234",
                "234"
              ],
              [
                "235",
                "235"
              ],
              [
                "236",
                "236"
              ],
              [
                "237",
                "237"
              ],
              [
                "238",
                "238"
              ],
              [
                "239",
                "239"
              ],
              [
                "240",
                "240"
              ],
              [
                "241",
                "241"
              ],
              [
                "242",
                "242"
              ],
              [
                "243",
                "243"
              ],
              [
                "244",
                "244"
              ],
              [
                "245",
                "245"
              ],
              [
                "246",
                "246"
              ],
              [
                "247",
                "247"
              ],
              [
                "248",
                "248"
              ],
              [
                "249",
                "249"
              ],
              [
                "250",
                "250"
              ],
              [
                "251",
                "251"
              ],
              [
                "252",
                "252"
              ],
              [
                "253",
                "253"
              ],
              [
                "254",
                "254"
              ],
              [
                "255",
                "255"
              ]
            ]), 'colorG')
            .appendField("B")
            .appendField(new Blockly.FieldDropdown([
              [
                "0",
                "0"
              ],
              [
                "1",
                "1"
              ],
              [
                "2",
                "2"
              ],
              [
                "3",
                "3"
              ],
              [
                "4",
                "4"
              ],
              [
                "5",
                "5"
              ],
              [
                "6",
                "6"
              ],
              [
                "7",
                "7"
              ],
              [
                "8",
                "8"
              ],
              [
                "9",
                "9"
              ],
              [
                "10",
                "10"
              ],
              [
                "11",
                "11"
              ],
              [
                "12",
                "12"
              ],
              [
                "13",
                "13"
              ],
              [
                "14",
                "14"
              ],
              [
                "15",
                "15"
              ],
              [
                "16",
                "16"
              ],
              [
                "17",
                "17"
              ],
              [
                "18",
                "18"
              ],
              [
                "19",
                "19"
              ],
              [
                "20",
                "20"
              ],
              [
                "21",
                "21"
              ],
              [
                "22",
                "22"
              ],
              [
                "23",
                "23"
              ],
              [
                "24",
                "24"
              ],
              [
                "25",
                "25"
              ],
              [
                "26",
                "26"
              ],
              [
                "27",
                "27"
              ],
              [
                "28",
                "28"
              ],
              [
                "29",
                "29"
              ],
              [
                "30",
                "30"
              ],
              [
                "31",
                "31"
              ],
              [
                "32",
                "32"
              ],
              [
                "33",
                "33"
              ],
              [
                "34",
                "34"
              ],
              [
                "35",
                "35"
              ],
              [
                "36",
                "36"
              ],
              [
                "37",
                "37"
              ],
              [
                "38",
                "38"
              ],
              [
                "39",
                "39"
              ],
              [
                "40",
                "40"
              ],
              [
                "41",
                "41"
              ],
              [
                "42",
                "42"
              ],
              [
                "43",
                "43"
              ],
              [
                "44",
                "44"
              ],
              [
                "45",
                "45"
              ],
              [
                "46",
                "46"
              ],
              [
                "47",
                "47"
              ],
              [
                "48",
                "48"
              ],
              [
                "49",
                "49"
              ],
              [
                "50",
                "50"
              ],
              [
                "51",
                "51"
              ],
              [
                "52",
                "52"
              ],
              [
                "53",
                "53"
              ],
              [
                "54",
                "54"
              ],
              [
                "55",
                "55"
              ],
              [
                "56",
                "56"
              ],
              [
                "57",
                "57"
              ],
              [
                "58",
                "58"
              ],
              [
                "59",
                "59"
              ],
              [
                "60",
                "60"
              ],
              [
                "61",
                "61"
              ],
              [
                "62",
                "62"
              ],
              [
                "63",
                "63"
              ],
              [
                "64",
                "64"
              ],
              [
                "65",
                "65"
              ],
              [
                "66",
                "66"
              ],
              [
                "67",
                "67"
              ],
              [
                "68",
                "68"
              ],
              [
                "69",
                "69"
              ],
              [
                "70",
                "70"
              ],
              [
                "71",
                "71"
              ],
              [
                "72",
                "72"
              ],
              [
                "73",
                "73"
              ],
              [
                "74",
                "74"
              ],
              [
                "75",
                "75"
              ],
              [
                "76",
                "76"
              ],
              [
                "77",
                "77"
              ],
              [
                "78",
                "78"
              ],
              [
                "79",
                "79"
              ],
              [
                "80",
                "80"
              ],
              [
                "81",
                "81"
              ],
              [
                "82",
                "82"
              ],
              [
                "83",
                "83"
              ],
              [
                "84",
                "84"
              ],
              [
                "85",
                "85"
              ],
              [
                "86",
                "86"
              ],
              [
                "87",
                "87"
              ],
              [
                "88",
                "88"
              ],
              [
                "89",
                "89"
              ],
              [
                "90",
                "90"
              ],
              [
                "91",
                "91"
              ],
              [
                "92",
                "92"
              ],
              [
                "93",
                "93"
              ],
              [
                "94",
                "94"
              ],
              [
                "95",
                "95"
              ],
              [
                "96",
                "96"
              ],
              [
                "97",
                "97"
              ],
              [
                "98",
                "98"
              ],
              [
                "99",
                "99"
              ],
              [
                "100",
                "100"
              ],
              [
                "101",
                "101"
              ],
              [
                "102",
                "102"
              ],
              [
                "103",
                "103"
              ],
              [
                "104",
                "104"
              ],
              [
                "105",
                "105"
              ],
              [
                "106",
                "106"
              ],
              [
                "107",
                "107"
              ],
              [
                "108",
                "108"
              ],
              [
                "109",
                "109"
              ],
              [
                "110",
                "110"
              ],
              [
                "111",
                "111"
              ],
              [
                "112",
                "112"
              ],
              [
                "113",
                "113"
              ],
              [
                "114",
                "114"
              ],
              [
                "115",
                "115"
              ],
              [
                "116",
                "116"
              ],
              [
                "117",
                "117"
              ],
              [
                "118",
                "118"
              ],
              [
                "119",
                "119"
              ],
              [
                "120",
                "120"
              ],
              [
                "121",
                "121"
              ],
              [
                "122",
                "122"
              ],
              [
                "123",
                "123"
              ],
              [
                "124",
                "124"
              ],
              [
                "125",
                "125"
              ],
              [
                "126",
                "126"
              ],
              [
                "127",
                "127"
              ],
              [
                "128",
                "128"
              ],
              [
                "129",
                "129"
              ],
              [
                "130",
                "130"
              ],
              [
                "131",
                "131"
              ],
              [
                "132",
                "132"
              ],
              [
                "133",
                "133"
              ],
              [
                "134",
                "134"
              ],
              [
                "135",
                "135"
              ],
              [
                "136",
                "136"
              ],
              [
                "137",
                "137"
              ],
              [
                "138",
                "138"
              ],
              [
                "139",
                "139"
              ],
              [
                "140",
                "140"
              ],
              [
                "141",
                "141"
              ],
              [
                "142",
                "142"
              ],
              [
                "143",
                "143"
              ],
              [
                "144",
                "144"
              ],
              [
                "145",
                "145"
              ],
              [
                "146",
                "146"
              ],
              [
                "147",
                "147"
              ],
              [
                "148",
                "148"
              ],
              [
                "149",
                "149"
              ],
              [
                "150",
                "150"
              ],
              [
                "151",
                "151"
              ],
              [
                "152",
                "152"
              ],
              [
                "153",
                "153"
              ],
              [
                "154",
                "154"
              ],
              [
                "155",
                "155"
              ],
              [
                "156",
                "156"
              ],
              [
                "157",
                "157"
              ],
              [
                "158",
                "158"
              ],
              [
                "159",
                "159"
              ],
              [
                "160",
                "160"
              ],
              [
                "161",
                "161"
              ],
              [
                "162",
                "162"
              ],
              [
                "163",
                "163"
              ],
              [
                "164",
                "164"
              ],
              [
                "165",
                "165"
              ],
              [
                "166",
                "166"
              ],
              [
                "167",
                "167"
              ],
              [
                "168",
                "168"
              ],
              [
                "169",
                "169"
              ],
              [
                "170",
                "170"
              ],
              [
                "171",
                "171"
              ],
              [
                "172",
                "172"
              ],
              [
                "173",
                "173"
              ],
              [
                "174",
                "174"
              ],
              [
                "175",
                "175"
              ],
              [
                "176",
                "176"
              ],
              [
                "177",
                "177"
              ],
              [
                "178",
                "178"
              ],
              [
                "179",
                "179"
              ],
              [
                "180",
                "180"
              ],
              [
                "181",
                "181"
              ],
              [
                "182",
                "182"
              ],
              [
                "183",
                "183"
              ],
              [
                "184",
                "184"
              ],
              [
                "185",
                "185"
              ],
              [
                "186",
                "186"
              ],
              [
                "187",
                "187"
              ],
              [
                "188",
                "188"
              ],
              [
                "189",
                "189"
              ],
              [
                "190",
                "190"
              ],
              [
                "191",
                "191"
              ],
              [
                "192",
                "192"
              ],
              [
                "193",
                "193"
              ],
              [
                "194",
                "194"
              ],
              [
                "195",
                "195"
              ],
              [
                "196",
                "196"
              ],
              [
                "197",
                "197"
              ],
              [
                "198",
                "198"
              ],
              [
                "199",
                "199"
              ],
              [
                "200",
                "200"
              ],
              [
                "201",
                "201"
              ],
              [
                "202",
                "202"
              ],
              [
                "203",
                "203"
              ],
              [
                "204",
                "204"
              ],
              [
                "205",
                "205"
              ],
              [
                "206",
                "206"
              ],
              [
                "207",
                "207"
              ],
              [
                "208",
                "208"
              ],
              [
                "209",
                "209"
              ],
              [
                "210",
                "210"
              ],
              [
                "211",
                "211"
              ],
              [
                "212",
                "212"
              ],
              [
                "213",
                "213"
              ],
              [
                "214",
                "214"
              ],
              [
                "215",
                "215"
              ],
              [
                "216",
                "216"
              ],
              [
                "217",
                "217"
              ],
              [
                "218",
                "218"
              ],
              [
                "219",
                "219"
              ],
              [
                "220",
                "220"
              ],
              [
                "221",
                "221"
              ],
              [
                "222",
                "222"
              ],
              [
                "223",
                "223"
              ],
              [
                "224",
                "224"
              ],
              [
                "225",
                "225"
              ],
              [
                "226",
                "226"
              ],
              [
                "227",
                "227"
              ],
              [
                "228",
                "228"
              ],
              [
                "229",
                "229"
              ],
              [
                "230",
                "230"
              ],
              [
                "231",
                "231"
              ],
              [
                "232",
                "232"
              ],
              [
                "233",
                "233"
              ],
              [
                "234",
                "234"
              ],
              [
                "235",
                "235"
              ],
              [
                "236",
                "236"
              ],
              [
                "237",
                "237"
              ],
              [
                "238",
                "238"
              ],
              [
                "239",
                "239"
              ],
              [
                "240",
                "240"
              ],
              [
                "241",
                "241"
              ],
              [
                "242",
                "242"
              ],
              [
                "243",
                "243"
              ],
              [
                "244",
                "244"
              ],
              [
                "245",
                "245"
              ],
              [
                "246",
                "246"
              ],
              [
                "247",
                "247"
              ],
              [
                "248",
                "248"
              ],
              [
                "249",
                "249"
              ],
              [
                "250",
                "250"
              ],
              [
                "251",
                "251"
              ],
              [
                "252",
                "252"
              ],
              [
                "253",
                "253"
              ],
              [
                "254",
                "254"
              ],
              [
                "255",
                "255"
              ]
            ]), 'colorB')
            // .appendField(new Blockly.FieldLabelSerializable(""), "colorElegido")
            .appendField(new Blockly.FieldImage(
              "https://cdn-icons-png.flaticon.com/512/64/64673.png",
              15,
              15,
              "*",
              function () {
                  Swal.fire({
                  title: "Color Picker",
                  text: "Elige un color:",
                  html: `
                    <input id="swal-input1" type="color" style="width:100px; height:50px" value="${this.getSourceBlock().getFieldValue('colorElegido')}">
                  `,
                  focusConfirm: false,
                  showCancelButton: true,
                  preConfirm: () => {
                    // colocar en rgb el numero que corresponde
                    function hexToRgb(hex) {
                      // Elimina el signo # al inicio si está presente
                      hex = hex.replace(/^#/, '');
                      
                      // Convierte el hex a un número entero (base 16)
                      let num = parseInt(hex, 16);
                  
                      // Extrae los componentes rojo, verde y azul del número entero
                      let r = (num >> 16) & 255; // Desplaza 16 bits y toma los últimos 8 bits
                      let g = (num >> 8) & 255;  // Desplaza 8 bits y toma los últimos 8 bits
                      let b = num & 255;         // Toma los últimos 8 bits
                  
                      // Convierte cada valor a string y devuelve el resultado como un array de strings
                      return [r.toString(), g.toString(), b.toString()];
                  }
                    let color = document.getElementById("swal-input1").value;
                    let colorRGB = hexToRgb(color)
                    // console.log(colorRGB);
                    this.getSourceBlock().inputList[0].fieldRow[1].setValue(colorRGB[0])
                    this.getSourceBlock().inputList[0].fieldRow[3].setValue(colorRGB[1])
                    this.getSourceBlock().inputList[0].fieldRow[5].setValue(colorRGB[2])
                  }
                });
              }))
            this.setStyle("values_blocks")
            this.setOutput(true)
          }
      };
  
    
        
      return {
        kind: 'block',
        type: 'colorRGB_block',
      }
  }
  
  colorRGBA_block() { 

    Blockly.Blocks['colorRGBA_block'] = {
      init: function () {
        this.appendDummyInput()
          .appendField("R")
          .appendField(new Blockly.FieldDropdown([
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "5",
              "5"
            ],
            [
              "6",
              "6"
            ],
            [
              "7",
              "7"
            ],
            [
              "8",
              "8"
            ],
            [
              "9",
              "9"
            ],
            [
              "10",
              "10"
            ],
            [
              "11",
              "11"
            ],
            [
              "12",
              "12"
            ],
            [
              "13",
              "13"
            ],
            [
              "14",
              "14"
            ],
            [
              "15",
              "15"
            ],
            [
              "16",
              "16"
            ],
            [
              "17",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "20",
              "20"
            ],
            [
              "21",
              "21"
            ],
            [
              "22",
              "22"
            ],
            [
              "23",
              "23"
            ],
            [
              "24",
              "24"
            ],
            [
              "25",
              "25"
            ],
            [
              "26",
              "26"
            ],
            [
              "27",
              "27"
            ],
            [
              "28",
              "28"
            ],
            [
              "29",
              "29"
            ],
            [
              "30",
              "30"
            ],
            [
              "31",
              "31"
            ],
            [
              "32",
              "32"
            ],
            [
              "33",
              "33"
            ],
            [
              "34",
              "34"
            ],
            [
              "35",
              "35"
            ],
            [
              "36",
              "36"
            ],
            [
              "37",
              "37"
            ],
            [
              "38",
              "38"
            ],
            [
              "39",
              "39"
            ],
            [
              "40",
              "40"
            ],
            [
              "41",
              "41"
            ],
            [
              "42",
              "42"
            ],
            [
              "43",
              "43"
            ],
            [
              "44",
              "44"
            ],
            [
              "45",
              "45"
            ],
            [
              "46",
              "46"
            ],
            [
              "47",
              "47"
            ],
            [
              "48",
              "48"
            ],
            [
              "49",
              "49"
            ],
            [
              "50",
              "50"
            ],
            [
              "51",
              "51"
            ],
            [
              "52",
              "52"
            ],
            [
              "53",
              "53"
            ],
            [
              "54",
              "54"
            ],
            [
              "55",
              "55"
            ],
            [
              "56",
              "56"
            ],
            [
              "57",
              "57"
            ],
            [
              "58",
              "58"
            ],
            [
              "59",
              "59"
            ],
            [
              "60",
              "60"
            ],
            [
              "61",
              "61"
            ],
            [
              "62",
              "62"
            ],
            [
              "63",
              "63"
            ],
            [
              "64",
              "64"
            ],
            [
              "65",
              "65"
            ],
            [
              "66",
              "66"
            ],
            [
              "67",
              "67"
            ],
            [
              "68",
              "68"
            ],
            [
              "69",
              "69"
            ],
            [
              "70",
              "70"
            ],
            [
              "71",
              "71"
            ],
            [
              "72",
              "72"
            ],
            [
              "73",
              "73"
            ],
            [
              "74",
              "74"
            ],
            [
              "75",
              "75"
            ],
            [
              "76",
              "76"
            ],
            [
              "77",
              "77"
            ],
            [
              "78",
              "78"
            ],
            [
              "79",
              "79"
            ],
            [
              "80",
              "80"
            ],
            [
              "81",
              "81"
            ],
            [
              "82",
              "82"
            ],
            [
              "83",
              "83"
            ],
            [
              "84",
              "84"
            ],
            [
              "85",
              "85"
            ],
            [
              "86",
              "86"
            ],
            [
              "87",
              "87"
            ],
            [
              "88",
              "88"
            ],
            [
              "89",
              "89"
            ],
            [
              "90",
              "90"
            ],
            [
              "91",
              "91"
            ],
            [
              "92",
              "92"
            ],
            [
              "93",
              "93"
            ],
            [
              "94",
              "94"
            ],
            [
              "95",
              "95"
            ],
            [
              "96",
              "96"
            ],
            [
              "97",
              "97"
            ],
            [
              "98",
              "98"
            ],
            [
              "99",
              "99"
            ],
            [
              "100",
              "100"
            ],
            [
              "101",
              "101"
            ],
            [
              "102",
              "102"
            ],
            [
              "103",
              "103"
            ],
            [
              "104",
              "104"
            ],
            [
              "105",
              "105"
            ],
            [
              "106",
              "106"
            ],
            [
              "107",
              "107"
            ],
            [
              "108",
              "108"
            ],
            [
              "109",
              "109"
            ],
            [
              "110",
              "110"
            ],
            [
              "111",
              "111"
            ],
            [
              "112",
              "112"
            ],
            [
              "113",
              "113"
            ],
            [
              "114",
              "114"
            ],
            [
              "115",
              "115"
            ],
            [
              "116",
              "116"
            ],
            [
              "117",
              "117"
            ],
            [
              "118",
              "118"
            ],
            [
              "119",
              "119"
            ],
            [
              "120",
              "120"
            ],
            [
              "121",
              "121"
            ],
            [
              "122",
              "122"
            ],
            [
              "123",
              "123"
            ],
            [
              "124",
              "124"
            ],
            [
              "125",
              "125"
            ],
            [
              "126",
              "126"
            ],
            [
              "127",
              "127"
            ],
            [
              "128",
              "128"
            ],
            [
              "129",
              "129"
            ],
            [
              "130",
              "130"
            ],
            [
              "131",
              "131"
            ],
            [
              "132",
              "132"
            ],
            [
              "133",
              "133"
            ],
            [
              "134",
              "134"
            ],
            [
              "135",
              "135"
            ],
            [
              "136",
              "136"
            ],
            [
              "137",
              "137"
            ],
            [
              "138",
              "138"
            ],
            [
              "139",
              "139"
            ],
            [
              "140",
              "140"
            ],
            [
              "141",
              "141"
            ],
            [
              "142",
              "142"
            ],
            [
              "143",
              "143"
            ],
            [
              "144",
              "144"
            ],
            [
              "145",
              "145"
            ],
            [
              "146",
              "146"
            ],
            [
              "147",
              "147"
            ],
            [
              "148",
              "148"
            ],
            [
              "149",
              "149"
            ],
            [
              "150",
              "150"
            ],
            [
              "151",
              "151"
            ],
            [
              "152",
              "152"
            ],
            [
              "153",
              "153"
            ],
            [
              "154",
              "154"
            ],
            [
              "155",
              "155"
            ],
            [
              "156",
              "156"
            ],
            [
              "157",
              "157"
            ],
            [
              "158",
              "158"
            ],
            [
              "159",
              "159"
            ],
            [
              "160",
              "160"
            ],
            [
              "161",
              "161"
            ],
            [
              "162",
              "162"
            ],
            [
              "163",
              "163"
            ],
            [
              "164",
              "164"
            ],
            [
              "165",
              "165"
            ],
            [
              "166",
              "166"
            ],
            [
              "167",
              "167"
            ],
            [
              "168",
              "168"
            ],
            [
              "169",
              "169"
            ],
            [
              "170",
              "170"
            ],
            [
              "171",
              "171"
            ],
            [
              "172",
              "172"
            ],
            [
              "173",
              "173"
            ],
            [
              "174",
              "174"
            ],
            [
              "175",
              "175"
            ],
            [
              "176",
              "176"
            ],
            [
              "177",
              "177"
            ],
            [
              "178",
              "178"
            ],
            [
              "179",
              "179"
            ],
            [
              "180",
              "180"
            ],
            [
              "181",
              "181"
            ],
            [
              "182",
              "182"
            ],
            [
              "183",
              "183"
            ],
            [
              "184",
              "184"
            ],
            [
              "185",
              "185"
            ],
            [
              "186",
              "186"
            ],
            [
              "187",
              "187"
            ],
            [
              "188",
              "188"
            ],
            [
              "189",
              "189"
            ],
            [
              "190",
              "190"
            ],
            [
              "191",
              "191"
            ],
            [
              "192",
              "192"
            ],
            [
              "193",
              "193"
            ],
            [
              "194",
              "194"
            ],
            [
              "195",
              "195"
            ],
            [
              "196",
              "196"
            ],
            [
              "197",
              "197"
            ],
            [
              "198",
              "198"
            ],
            [
              "199",
              "199"
            ],
            [
              "200",
              "200"
            ],
            [
              "201",
              "201"
            ],
            [
              "202",
              "202"
            ],
            [
              "203",
              "203"
            ],
            [
              "204",
              "204"
            ],
            [
              "205",
              "205"
            ],
            [
              "206",
              "206"
            ],
            [
              "207",
              "207"
            ],
            [
              "208",
              "208"
            ],
            [
              "209",
              "209"
            ],
            [
              "210",
              "210"
            ],
            [
              "211",
              "211"
            ],
            [
              "212",
              "212"
            ],
            [
              "213",
              "213"
            ],
            [
              "214",
              "214"
            ],
            [
              "215",
              "215"
            ],
            [
              "216",
              "216"
            ],
            [
              "217",
              "217"
            ],
            [
              "218",
              "218"
            ],
            [
              "219",
              "219"
            ],
            [
              "220",
              "220"
            ],
            [
              "221",
              "221"
            ],
            [
              "222",
              "222"
            ],
            [
              "223",
              "223"
            ],
            [
              "224",
              "224"
            ],
            [
              "225",
              "225"
            ],
            [
              "226",
              "226"
            ],
            [
              "227",
              "227"
            ],
            [
              "228",
              "228"
            ],
            [
              "229",
              "229"
            ],
            [
              "230",
              "230"
            ],
            [
              "231",
              "231"
            ],
            [
              "232",
              "232"
            ],
            [
              "233",
              "233"
            ],
            [
              "234",
              "234"
            ],
            [
              "235",
              "235"
            ],
            [
              "236",
              "236"
            ],
            [
              "237",
              "237"
            ],
            [
              "238",
              "238"
            ],
            [
              "239",
              "239"
            ],
            [
              "240",
              "240"
            ],
            [
              "241",
              "241"
            ],
            [
              "242",
              "242"
            ],
            [
              "243",
              "243"
            ],
            [
              "244",
              "244"
            ],
            [
              "245",
              "245"
            ],
            [
              "246",
              "246"
            ],
            [
              "247",
              "247"
            ],
            [
              "248",
              "248"
            ],
            [
              "249",
              "249"
            ],
            [
              "250",
              "250"
            ],
            [
              "251",
              "251"
            ],
            [
              "252",
              "252"
            ],
            [
              "253",
              "253"
            ],
            [
              "254",
              "254"
            ],
            [
              "255",
              "255"
            ]
          ]), 'colorR')
          .appendField("G")
          .appendField(new Blockly.FieldDropdown([
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "5",
              "5"
            ],
            [
              "6",
              "6"
            ],
            [
              "7",
              "7"
            ],
            [
              "8",
              "8"
            ],
            [
              "9",
              "9"
            ],
            [
              "10",
              "10"
            ],
            [
              "11",
              "11"
            ],
            [
              "12",
              "12"
            ],
            [
              "13",
              "13"
            ],
            [
              "14",
              "14"
            ],
            [
              "15",
              "15"
            ],
            [
              "16",
              "16"
            ],
            [
              "17",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "20",
              "20"
            ],
            [
              "21",
              "21"
            ],
            [
              "22",
              "22"
            ],
            [
              "23",
              "23"
            ],
            [
              "24",
              "24"
            ],
            [
              "25",
              "25"
            ],
            [
              "26",
              "26"
            ],
            [
              "27",
              "27"
            ],
            [
              "28",
              "28"
            ],
            [
              "29",
              "29"
            ],
            [
              "30",
              "30"
            ],
            [
              "31",
              "31"
            ],
            [
              "32",
              "32"
            ],
            [
              "33",
              "33"
            ],
            [
              "34",
              "34"
            ],
            [
              "35",
              "35"
            ],
            [
              "36",
              "36"
            ],
            [
              "37",
              "37"
            ],
            [
              "38",
              "38"
            ],
            [
              "39",
              "39"
            ],
            [
              "40",
              "40"
            ],
            [
              "41",
              "41"
            ],
            [
              "42",
              "42"
            ],
            [
              "43",
              "43"
            ],
            [
              "44",
              "44"
            ],
            [
              "45",
              "45"
            ],
            [
              "46",
              "46"
            ],
            [
              "47",
              "47"
            ],
            [
              "48",
              "48"
            ],
            [
              "49",
              "49"
            ],
            [
              "50",
              "50"
            ],
            [
              "51",
              "51"
            ],
            [
              "52",
              "52"
            ],
            [
              "53",
              "53"
            ],
            [
              "54",
              "54"
            ],
            [
              "55",
              "55"
            ],
            [
              "56",
              "56"
            ],
            [
              "57",
              "57"
            ],
            [
              "58",
              "58"
            ],
            [
              "59",
              "59"
            ],
            [
              "60",
              "60"
            ],
            [
              "61",
              "61"
            ],
            [
              "62",
              "62"
            ],
            [
              "63",
              "63"
            ],
            [
              "64",
              "64"
            ],
            [
              "65",
              "65"
            ],
            [
              "66",
              "66"
            ],
            [
              "67",
              "67"
            ],
            [
              "68",
              "68"
            ],
            [
              "69",
              "69"
            ],
            [
              "70",
              "70"
            ],
            [
              "71",
              "71"
            ],
            [
              "72",
              "72"
            ],
            [
              "73",
              "73"
            ],
            [
              "74",
              "74"
            ],
            [
              "75",
              "75"
            ],
            [
              "76",
              "76"
            ],
            [
              "77",
              "77"
            ],
            [
              "78",
              "78"
            ],
            [
              "79",
              "79"
            ],
            [
              "80",
              "80"
            ],
            [
              "81",
              "81"
            ],
            [
              "82",
              "82"
            ],
            [
              "83",
              "83"
            ],
            [
              "84",
              "84"
            ],
            [
              "85",
              "85"
            ],
            [
              "86",
              "86"
            ],
            [
              "87",
              "87"
            ],
            [
              "88",
              "88"
            ],
            [
              "89",
              "89"
            ],
            [
              "90",
              "90"
            ],
            [
              "91",
              "91"
            ],
            [
              "92",
              "92"
            ],
            [
              "93",
              "93"
            ],
            [
              "94",
              "94"
            ],
            [
              "95",
              "95"
            ],
            [
              "96",
              "96"
            ],
            [
              "97",
              "97"
            ],
            [
              "98",
              "98"
            ],
            [
              "99",
              "99"
            ],
            [
              "100",
              "100"
            ],
            [
              "101",
              "101"
            ],
            [
              "102",
              "102"
            ],
            [
              "103",
              "103"
            ],
            [
              "104",
              "104"
            ],
            [
              "105",
              "105"
            ],
            [
              "106",
              "106"
            ],
            [
              "107",
              "107"
            ],
            [
              "108",
              "108"
            ],
            [
              "109",
              "109"
            ],
            [
              "110",
              "110"
            ],
            [
              "111",
              "111"
            ],
            [
              "112",
              "112"
            ],
            [
              "113",
              "113"
            ],
            [
              "114",
              "114"
            ],
            [
              "115",
              "115"
            ],
            [
              "116",
              "116"
            ],
            [
              "117",
              "117"
            ],
            [
              "118",
              "118"
            ],
            [
              "119",
              "119"
            ],
            [
              "120",
              "120"
            ],
            [
              "121",
              "121"
            ],
            [
              "122",
              "122"
            ],
            [
              "123",
              "123"
            ],
            [
              "124",
              "124"
            ],
            [
              "125",
              "125"
            ],
            [
              "126",
              "126"
            ],
            [
              "127",
              "127"
            ],
            [
              "128",
              "128"
            ],
            [
              "129",
              "129"
            ],
            [
              "130",
              "130"
            ],
            [
              "131",
              "131"
            ],
            [
              "132",
              "132"
            ],
            [
              "133",
              "133"
            ],
            [
              "134",
              "134"
            ],
            [
              "135",
              "135"
            ],
            [
              "136",
              "136"
            ],
            [
              "137",
              "137"
            ],
            [
              "138",
              "138"
            ],
            [
              "139",
              "139"
            ],
            [
              "140",
              "140"
            ],
            [
              "141",
              "141"
            ],
            [
              "142",
              "142"
            ],
            [
              "143",
              "143"
            ],
            [
              "144",
              "144"
            ],
            [
              "145",
              "145"
            ],
            [
              "146",
              "146"
            ],
            [
              "147",
              "147"
            ],
            [
              "148",
              "148"
            ],
            [
              "149",
              "149"
            ],
            [
              "150",
              "150"
            ],
            [
              "151",
              "151"
            ],
            [
              "152",
              "152"
            ],
            [
              "153",
              "153"
            ],
            [
              "154",
              "154"
            ],
            [
              "155",
              "155"
            ],
            [
              "156",
              "156"
            ],
            [
              "157",
              "157"
            ],
            [
              "158",
              "158"
            ],
            [
              "159",
              "159"
            ],
            [
              "160",
              "160"
            ],
            [
              "161",
              "161"
            ],
            [
              "162",
              "162"
            ],
            [
              "163",
              "163"
            ],
            [
              "164",
              "164"
            ],
            [
              "165",
              "165"
            ],
            [
              "166",
              "166"
            ],
            [
              "167",
              "167"
            ],
            [
              "168",
              "168"
            ],
            [
              "169",
              "169"
            ],
            [
              "170",
              "170"
            ],
            [
              "171",
              "171"
            ],
            [
              "172",
              "172"
            ],
            [
              "173",
              "173"
            ],
            [
              "174",
              "174"
            ],
            [
              "175",
              "175"
            ],
            [
              "176",
              "176"
            ],
            [
              "177",
              "177"
            ],
            [
              "178",
              "178"
            ],
            [
              "179",
              "179"
            ],
            [
              "180",
              "180"
            ],
            [
              "181",
              "181"
            ],
            [
              "182",
              "182"
            ],
            [
              "183",
              "183"
            ],
            [
              "184",
              "184"
            ],
            [
              "185",
              "185"
            ],
            [
              "186",
              "186"
            ],
            [
              "187",
              "187"
            ],
            [
              "188",
              "188"
            ],
            [
              "189",
              "189"
            ],
            [
              "190",
              "190"
            ],
            [
              "191",
              "191"
            ],
            [
              "192",
              "192"
            ],
            [
              "193",
              "193"
            ],
            [
              "194",
              "194"
            ],
            [
              "195",
              "195"
            ],
            [
              "196",
              "196"
            ],
            [
              "197",
              "197"
            ],
            [
              "198",
              "198"
            ],
            [
              "199",
              "199"
            ],
            [
              "200",
              "200"
            ],
            [
              "201",
              "201"
            ],
            [
              "202",
              "202"
            ],
            [
              "203",
              "203"
            ],
            [
              "204",
              "204"
            ],
            [
              "205",
              "205"
            ],
            [
              "206",
              "206"
            ],
            [
              "207",
              "207"
            ],
            [
              "208",
              "208"
            ],
            [
              "209",
              "209"
            ],
            [
              "210",
              "210"
            ],
            [
              "211",
              "211"
            ],
            [
              "212",
              "212"
            ],
            [
              "213",
              "213"
            ],
            [
              "214",
              "214"
            ],
            [
              "215",
              "215"
            ],
            [
              "216",
              "216"
            ],
            [
              "217",
              "217"
            ],
            [
              "218",
              "218"
            ],
            [
              "219",
              "219"
            ],
            [
              "220",
              "220"
            ],
            [
              "221",
              "221"
            ],
            [
              "222",
              "222"
            ],
            [
              "223",
              "223"
            ],
            [
              "224",
              "224"
            ],
            [
              "225",
              "225"
            ],
            [
              "226",
              "226"
            ],
            [
              "227",
              "227"
            ],
            [
              "228",
              "228"
            ],
            [
              "229",
              "229"
            ],
            [
              "230",
              "230"
            ],
            [
              "231",
              "231"
            ],
            [
              "232",
              "232"
            ],
            [
              "233",
              "233"
            ],
            [
              "234",
              "234"
            ],
            [
              "235",
              "235"
            ],
            [
              "236",
              "236"
            ],
            [
              "237",
              "237"
            ],
            [
              "238",
              "238"
            ],
            [
              "239",
              "239"
            ],
            [
              "240",
              "240"
            ],
            [
              "241",
              "241"
            ],
            [
              "242",
              "242"
            ],
            [
              "243",
              "243"
            ],
            [
              "244",
              "244"
            ],
            [
              "245",
              "245"
            ],
            [
              "246",
              "246"
            ],
            [
              "247",
              "247"
            ],
            [
              "248",
              "248"
            ],
            [
              "249",
              "249"
            ],
            [
              "250",
              "250"
            ],
            [
              "251",
              "251"
            ],
            [
              "252",
              "252"
            ],
            [
              "253",
              "253"
            ],
            [
              "254",
              "254"
            ],
            [
              "255",
              "255"
            ]
          ]), 'colorG')
          .appendField("B")
          .appendField(new Blockly.FieldDropdown([
            [
              "0",
              "0"
            ],
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "5",
              "5"
            ],
            [
              "6",
              "6"
            ],
            [
              "7",
              "7"
            ],
            [
              "8",
              "8"
            ],
            [
              "9",
              "9"
            ],
            [
              "10",
              "10"
            ],
            [
              "11",
              "11"
            ],
            [
              "12",
              "12"
            ],
            [
              "13",
              "13"
            ],
            [
              "14",
              "14"
            ],
            [
              "15",
              "15"
            ],
            [
              "16",
              "16"
            ],
            [
              "17",
              "17"
            ],
            [
              "18",
              "18"
            ],
            [
              "19",
              "19"
            ],
            [
              "20",
              "20"
            ],
            [
              "21",
              "21"
            ],
            [
              "22",
              "22"
            ],
            [
              "23",
              "23"
            ],
            [
              "24",
              "24"
            ],
            [
              "25",
              "25"
            ],
            [
              "26",
              "26"
            ],
            [
              "27",
              "27"
            ],
            [
              "28",
              "28"
            ],
            [
              "29",
              "29"
            ],
            [
              "30",
              "30"
            ],
            [
              "31",
              "31"
            ],
            [
              "32",
              "32"
            ],
            [
              "33",
              "33"
            ],
            [
              "34",
              "34"
            ],
            [
              "35",
              "35"
            ],
            [
              "36",
              "36"
            ],
            [
              "37",
              "37"
            ],
            [
              "38",
              "38"
            ],
            [
              "39",
              "39"
            ],
            [
              "40",
              "40"
            ],
            [
              "41",
              "41"
            ],
            [
              "42",
              "42"
            ],
            [
              "43",
              "43"
            ],
            [
              "44",
              "44"
            ],
            [
              "45",
              "45"
            ],
            [
              "46",
              "46"
            ],
            [
              "47",
              "47"
            ],
            [
              "48",
              "48"
            ],
            [
              "49",
              "49"
            ],
            [
              "50",
              "50"
            ],
            [
              "51",
              "51"
            ],
            [
              "52",
              "52"
            ],
            [
              "53",
              "53"
            ],
            [
              "54",
              "54"
            ],
            [
              "55",
              "55"
            ],
            [
              "56",
              "56"
            ],
            [
              "57",
              "57"
            ],
            [
              "58",
              "58"
            ],
            [
              "59",
              "59"
            ],
            [
              "60",
              "60"
            ],
            [
              "61",
              "61"
            ],
            [
              "62",
              "62"
            ],
            [
              "63",
              "63"
            ],
            [
              "64",
              "64"
            ],
            [
              "65",
              "65"
            ],
            [
              "66",
              "66"
            ],
            [
              "67",
              "67"
            ],
            [
              "68",
              "68"
            ],
            [
              "69",
              "69"
            ],
            [
              "70",
              "70"
            ],
            [
              "71",
              "71"
            ],
            [
              "72",
              "72"
            ],
            [
              "73",
              "73"
            ],
            [
              "74",
              "74"
            ],
            [
              "75",
              "75"
            ],
            [
              "76",
              "76"
            ],
            [
              "77",
              "77"
            ],
            [
              "78",
              "78"
            ],
            [
              "79",
              "79"
            ],
            [
              "80",
              "80"
            ],
            [
              "81",
              "81"
            ],
            [
              "82",
              "82"
            ],
            [
              "83",
              "83"
            ],
            [
              "84",
              "84"
            ],
            [
              "85",
              "85"
            ],
            [
              "86",
              "86"
            ],
            [
              "87",
              "87"
            ],
            [
              "88",
              "88"
            ],
            [
              "89",
              "89"
            ],
            [
              "90",
              "90"
            ],
            [
              "91",
              "91"
            ],
            [
              "92",
              "92"
            ],
            [
              "93",
              "93"
            ],
            [
              "94",
              "94"
            ],
            [
              "95",
              "95"
            ],
            [
              "96",
              "96"
            ],
            [
              "97",
              "97"
            ],
            [
              "98",
              "98"
            ],
            [
              "99",
              "99"
            ],
            [
              "100",
              "100"
            ],
            [
              "101",
              "101"
            ],
            [
              "102",
              "102"
            ],
            [
              "103",
              "103"
            ],
            [
              "104",
              "104"
            ],
            [
              "105",
              "105"
            ],
            [
              "106",
              "106"
            ],
            [
              "107",
              "107"
            ],
            [
              "108",
              "108"
            ],
            [
              "109",
              "109"
            ],
            [
              "110",
              "110"
            ],
            [
              "111",
              "111"
            ],
            [
              "112",
              "112"
            ],
            [
              "113",
              "113"
            ],
            [
              "114",
              "114"
            ],
            [
              "115",
              "115"
            ],
            [
              "116",
              "116"
            ],
            [
              "117",
              "117"
            ],
            [
              "118",
              "118"
            ],
            [
              "119",
              "119"
            ],
            [
              "120",
              "120"
            ],
            [
              "121",
              "121"
            ],
            [
              "122",
              "122"
            ],
            [
              "123",
              "123"
            ],
            [
              "124",
              "124"
            ],
            [
              "125",
              "125"
            ],
            [
              "126",
              "126"
            ],
            [
              "127",
              "127"
            ],
            [
              "128",
              "128"
            ],
            [
              "129",
              "129"
            ],
            [
              "130",
              "130"
            ],
            [
              "131",
              "131"
            ],
            [
              "132",
              "132"
            ],
            [
              "133",
              "133"
            ],
            [
              "134",
              "134"
            ],
            [
              "135",
              "135"
            ],
            [
              "136",
              "136"
            ],
            [
              "137",
              "137"
            ],
            [
              "138",
              "138"
            ],
            [
              "139",
              "139"
            ],
            [
              "140",
              "140"
            ],
            [
              "141",
              "141"
            ],
            [
              "142",
              "142"
            ],
            [
              "143",
              "143"
            ],
            [
              "144",
              "144"
            ],
            [
              "145",
              "145"
            ],
            [
              "146",
              "146"
            ],
            [
              "147",
              "147"
            ],
            [
              "148",
              "148"
            ],
            [
              "149",
              "149"
            ],
            [
              "150",
              "150"
            ],
            [
              "151",
              "151"
            ],
            [
              "152",
              "152"
            ],
            [
              "153",
              "153"
            ],
            [
              "154",
              "154"
            ],
            [
              "155",
              "155"
            ],
            [
              "156",
              "156"
            ],
            [
              "157",
              "157"
            ],
            [
              "158",
              "158"
            ],
            [
              "159",
              "159"
            ],
            [
              "160",
              "160"
            ],
            [
              "161",
              "161"
            ],
            [
              "162",
              "162"
            ],
            [
              "163",
              "163"
            ],
            [
              "164",
              "164"
            ],
            [
              "165",
              "165"
            ],
            [
              "166",
              "166"
            ],
            [
              "167",
              "167"
            ],
            [
              "168",
              "168"
            ],
            [
              "169",
              "169"
            ],
            [
              "170",
              "170"
            ],
            [
              "171",
              "171"
            ],
            [
              "172",
              "172"
            ],
            [
              "173",
              "173"
            ],
            [
              "174",
              "174"
            ],
            [
              "175",
              "175"
            ],
            [
              "176",
              "176"
            ],
            [
              "177",
              "177"
            ],
            [
              "178",
              "178"
            ],
            [
              "179",
              "179"
            ],
            [
              "180",
              "180"
            ],
            [
              "181",
              "181"
            ],
            [
              "182",
              "182"
            ],
            [
              "183",
              "183"
            ],
            [
              "184",
              "184"
            ],
            [
              "185",
              "185"
            ],
            [
              "186",
              "186"
            ],
            [
              "187",
              "187"
            ],
            [
              "188",
              "188"
            ],
            [
              "189",
              "189"
            ],
            [
              "190",
              "190"
            ],
            [
              "191",
              "191"
            ],
            [
              "192",
              "192"
            ],
            [
              "193",
              "193"
            ],
            [
              "194",
              "194"
            ],
            [
              "195",
              "195"
            ],
            [
              "196",
              "196"
            ],
            [
              "197",
              "197"
            ],
            [
              "198",
              "198"
            ],
            [
              "199",
              "199"
            ],
            [
              "200",
              "200"
            ],
            [
              "201",
              "201"
            ],
            [
              "202",
              "202"
            ],
            [
              "203",
              "203"
            ],
            [
              "204",
              "204"
            ],
            [
              "205",
              "205"
            ],
            [
              "206",
              "206"
            ],
            [
              "207",
              "207"
            ],
            [
              "208",
              "208"
            ],
            [
              "209",
              "209"
            ],
            [
              "210",
              "210"
            ],
            [
              "211",
              "211"
            ],
            [
              "212",
              "212"
            ],
            [
              "213",
              "213"
            ],
            [
              "214",
              "214"
            ],
            [
              "215",
              "215"
            ],
            [
              "216",
              "216"
            ],
            [
              "217",
              "217"
            ],
            [
              "218",
              "218"
            ],
            [
              "219",
              "219"
            ],
            [
              "220",
              "220"
            ],
            [
              "221",
              "221"
            ],
            [
              "222",
              "222"
            ],
            [
              "223",
              "223"
            ],
            [
              "224",
              "224"
            ],
            [
              "225",
              "225"
            ],
            [
              "226",
              "226"
            ],
            [
              "227",
              "227"
            ],
            [
              "228",
              "228"
            ],
            [
              "229",
              "229"
            ],
            [
              "230",
              "230"
            ],
            [
              "231",
              "231"
            ],
            [
              "232",
              "232"
            ],
            [
              "233",
              "233"
            ],
            [
              "234",
              "234"
            ],
            [
              "235",
              "235"
            ],
            [
              "236",
              "236"
            ],
            [
              "237",
              "237"
            ],
            [
              "238",
              "238"
            ],
            [
              "239",
              "239"
            ],
            [
              "240",
              "240"
            ],
            [
              "241",
              "241"
            ],
            [
              "242",
              "242"
            ],
            [
              "243",
              "243"
            ],
            [
              "244",
              "244"
            ],
            [
              "245",
              "245"
            ],
            [
              "246",
              "246"
            ],
            [
              "247",
              "247"
            ],
            [
              "248",
              "248"
            ],
            [
              "249",
              "249"
            ],
            [
              "250",
              "250"
            ],
            [
              "251",
              "251"
            ],
            [
              "252",
              "252"
            ],
            [
              "253",
              "253"
            ],
            [
              "254",
              "254"
            ],
            [
              "255",
              "255"
            ]
          ]), 'colorB')
          .appendField("A")
          .appendField(new Blockly.FieldDropdown([
            ["0", "0"],
            ["0.1", "0.1"],
            ["0.2", "0.2"],
            ["0.3", "0.3"],
            ["0.4", "0.4"],
            ["0.5", "0.5"],
            ["0.6", "0.6"],
            ["0.7", "0.7"],
            ["0.8", "0.8"],
            ["0.9", "0.9"],
            ["1", "1"],
          ]), 'colorA')
          // .appendField(new Blockly.FieldLabelSerializable(""), "colorElegido")
          .appendField(new Blockly.FieldImage(
            "https://cdn-icons-png.flaticon.com/512/64/64673.png",
            15,
            15,
            "*",
            function () {
                Swal.fire({
                title: "Color Picker",
                text: "Elige un color:",
                html: `
                  <input id="swal-input1" type="color" style="width:100px; height:50px" value="${this.getSourceBlock().getFieldValue('colorElegido')}">
                `,
                focusConfirm: false,
                showCancelButton: true,
                preConfirm: () => {
                  // colocar en rgb el numero que corresponde
                  function hexToRgb(hex) {
                    // Elimina el signo # al inicio si está presente
                    hex = hex.replace(/^#/, '');
                    
                    // Convierte el hex a un número entero (base 16)
                    let num = parseInt(hex, 16);
                
                    // Extrae los componentes rojo, verde y azul del número entero
                    let r = (num >> 16) & 255; // Desplaza 16 bits y toma los últimos 8 bits
                    let g = (num >> 8) & 255;  // Desplaza 8 bits y toma los últimos 8 bits
                    let b = num & 255;         // Toma los últimos 8 bits
                
                    // Convierte cada valor a string y devuelve el resultado como un array de strings
                    return [r.toString(), g.toString(), b.toString()];
                }
                  let color = document.getElementById("swal-input1").value;
                  let colorRGB = hexToRgb(color)
                  // console.log(colorRGB);
                  this.getSourceBlock().inputList[0].fieldRow[1].setValue(colorRGB[0])
                  this.getSourceBlock().inputList[0].fieldRow[3].setValue(colorRGB[1])
                  this.getSourceBlock().inputList[0].fieldRow[5].setValue(colorRGB[2])
                }
              });
            }))
          this.setStyle("values_blocks")
          this.setOutput(true)
        }
    };

  
      
    return {
      kind: 'block',
      type: 'colorRGBA_block',
    }
  }
}

