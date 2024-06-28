
import { DHS_Gallery } from '../clases/Dhs-galeria';
import {htmlGenerator} from '../generators/htmlGenerator';
import { cssGenerator } from '../generators/cssGenerator';
import { numerosRGB } from '../utils/numerosRGB';
import { hexToRgb , rgbToHex} from '../utils/Funciones';
import Swal from "sweetalert2";

export default class ConfiguradorBloques {
    constructor() {
      this.toolboxes ={
        HTML:{
          kind: "categoryToolbox",
          contents: []
        },
        CSS:{
          kind: "categoryToolbox",
          contents: []
        },
        JS:{
          kind: "categoryToolbox",
          contents: []
        }
      }
        this.galeria = new DHS_Gallery
    }

    crearCategoriaToolbox(datosCategoria,tipo) {
        this.toolboxes[tipo].contents.push({
          kind: "category",
          name: datosCategoria.name,
          categorystyle: datosCategoria.categorystyle,
          contents: [],
      })
  
    }

    configurarUnBloqueCustomStandard(keywordBloque, nombreCategoria = "Acciones",tipo) {
        if (!this[keywordBloque]) {
          throw new Error("No tenemos un método para configurar bloques que coincida con la keyowrd " + keywordBloque);
      }
      let categoriaBuscada = this.toolboxes[tipo].contents.find(obj => obj.kind == "category" && obj.name == nombreCategoria);
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

    getToolbox(tipo){
      return this.toolboxes[tipo]
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
// estructura y config
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
          "style": "structureA_blocks",
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
        "message0": "TÍTULO PESTAÑA %1",
        "args0": [
          {
            "type": "input_value",
            "name": "contenidoTitle",
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "config_blocks",
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
      "style": "config_blocks",
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
        "style": "config_blocks",
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
        "style": "config_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "charset_block",
        kind: "block",
    }
  }
// contenedores
  semantics_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "semantics_block",
        "message0": "ENCABEZADO DE PÁGINA %1 %2 CUERPO PRINCIPAL %3 %4 PIE DE PÁGINA %5 %6",
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
        "style": "semantics_blocks",
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
        "message0": "CAJA TIPO %1 %2 %3",
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

  boxes_name_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "boxes_name_block",
        "message0": "CAJA TIPO %1 con nombre %2 %3",
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
            "type": "input_value",
            "name": "nombre",
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
      type: "boxes_name_block",
      inputs: { "nombre": { 'block': { 'type': 'plaintext_block' } } },
        kind: "block",
    }
  }
// Contenido
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
        "style": "contentA_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "anchor_block",
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
        "style": "form_blocks",
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
            "name": "inputLabel",
          },
          {
            "type": "input_value",
            "name": "inputType",
          },
          {
            "type": "input_value",
            "name": "inputPlaceholder",
          },
          
        ],
        "previousStatement": null,
        "nextStatement": null,
        "style": "form_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
      type: "input_block",
      inputs: { "inputLabel": { 'block': { 'type': 'plaintext_block' } }, "inputType": { 'block': { 'type': "inputType_dropdown_block" } } , "inputPlaceholder":{ 'block': { "type": "plaintext_block"}} },
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
        "style": "form_blocks",
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
        "message0": "OPCIÓN %1",
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
        "style": "formA_blocks",
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
        "message0": "ÍTEM %1",
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
        "style": "contentA_blocks",
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
        "style": "formA_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "inputType_dropdown_block",
        kind: "block",
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
        "style": "semantics_blocks",
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
        "message0": "Seleccionar los elementos %1 %2 y aplicar los siguientes estilos %3 %4",
        "args0": [
          {
            "type": "input_value",
            "name": "selector",
          },
          {
            "type": "input_end_row"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "propiedades",
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        // "inputsInline": true,
        "style": "boxes_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
      "type": "selector_block",
      "inputs": { "selector": { 'block': { 'type': 'selector_dropdown_block' } } },
      "kind": "block",
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
        "style": "semantics_blocks",
        "tooltip": "",
        "helpUrl": ""
      }
    ])
    return {
        type: "selector_dropdown_block",
        kind: "block",
    }
  }
  // propiedades
  property_color_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_color_block",
        "message0": "COLOR DE LETRA %1",
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

  property_margin_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_margin_block",
        "message0": "MARGEN %1",
        "args0": [
          {
            "type": "input_value",
            "name": "valueMargen",
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
        type: "property_margin_block",
        kind: "block",
    }
  }

  property_padding_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_padding_block",
        "message0": "RELLENO %1",
        "args0": [
          {
            "type": "input_value",
            "name": "valueMargen",
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
        type: "property_padding_block",
        kind: "block",
    }
  }
 
  property_backgroundcolor_block() {
    Blockly.common.defineBlocksWithJsonArray([
      {
        "type": "property_backgroundcolor_block",
        "message0": "COLOR DE FONDO %1",
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
        "message0": "ESTILO DE VIÑETA %1",
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
        "message0": "TIPOGRAFÍA %1",
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

  // valores
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
            .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorR')
            .appendField("G")
            .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorG')
            .appendField("B")
            .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorB')
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
                    <input id="swal-input1" type="color" style="width:100px; height:50px" value="${rgbToHex(this.getSourceBlock().getFieldValue('colorR'), this.getSourceBlock().getFieldValue('colorG'), this.getSourceBlock().getFieldValue('colorB'))}">
                  `,
                  focusConfirm: false,
                  showCancelButton: true,
                  preConfirm: () => {
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
          .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorR')
          .appendField("G")
          .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorG')
          .appendField("B")
          .appendField(new Blockly.FieldDropdown(numerosRGB), 'colorB')
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
                    <input id="swal-input1" type="color" style="width:100px; height:50px" value="${rgbToHex(this.getSourceBlock().getFieldValue('colorR'), this.getSourceBlock().getFieldValue('colorG'), this.getSourceBlock().getFieldValue('colorB'))}">
                  `,
                focusConfirm: false,
                showCancelButton: true,
                preConfirm: () => {
                  
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

  //labels o separadores
  label_estructura() {

    return {
      kind: "label",
      text: "Estructura general"
    }
  }

  label_config() {

    return {
      kind: "label",
      text: "Configuraciones"
    }
  }

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

  label_coloresFondos() {

    return {
      kind: "label",
      text: "Colores y fondos"
    }
  }

  label_colores() {

    return {
      kind: "label",
      text: "Colores"
    }
  }
 
  label_cajasBordes() {

    return {
      kind: "label",
      text: "Cajas y bordes"
    }
  }

  label_estiloTextos() {

    return {
      kind: "label",
      text: "Estilos de textos"
    }
  }

  label_imagenes() {

    return {
      kind: "label",
      text: "Imágenes"
    }
  }

  label_medidas() {

    return {
      kind: "label",
      text: "Medidas"
    }
  }
  
}

