import '../../style.css'
import { configurarYRenderizarToolbox } from '../../utils/Funciones.js';
import ControladorStandard from "../../bloques/Controlador.js";
import CustomTheme from "../../bloques/CustomTheme.js";
import { CustomCategory } from "../../bloques/CustomCategory";
import customTheme from "../../bloques/CustomTheme";
import { Dhs_Categorias } from '../../clases/Dhs-categorias.js';
import { template } from "../../utils/Template.js";




(function () { document.querySelector('#app').innerHTML = template(``) }());

//Ejercicios
// BLOCKLY ------------------------------------------------------
const estadoWorkspaceInicialHTML = "{}";
const estadoWorkspaceInicialCSS = '{"blocks":{"languageVersion":0,"blocks":[{"type":"styles_block","id":"rwW]g?!-iwJNk))r*~^C","x":160,"y":130}]}}'
window.miControlador = new ControladorStandard(estadoWorkspaceInicialHTML);
const categoriaHTML = new Dhs_Categorias()
const categoriaCSS = new Dhs_Categorias()
const categoriaElegidaHtml = categoriaHTML.obtenerCategoriasNecesarias(["Estructura", "Contenedores", "Contenido", "Formularios", "Valores"])
const categoriaElegidaCss = categoriaCSS.obtenerCategoriasNecesarias(["Selectores", "Propiedades", "Valores"])
const ordenJerarquicoBloques = [
   ["label_estructura", "Estructura"],
   ["structure_block", "Estructura"],
   ["label_config", "Estructura"],
   ["title_block", "Estructura"],
   ["link_block", "Estructura"],
   ["script_block", "Estructura"],
   ["charset_block", "Estructura"],
   ["semantics_block", "Contenedores"],
   ["boxes_block", "Contenedores"],
   ["boxes_name_block", "Contenedores"],
   ["label_textos", "Contenido"],
   ["headings_block", "Contenido"],
   ["paragraph_block", "Contenido"],
   ["paragraph_link_block", "Contenido"],
   ["anchor_block", "Contenido"],
   ["label_multimedia", "Contenido"],
   ["image_block", "Contenido"],
   ["label_listas", "Contenido"],
   ["list_block", "Contenido"],
   ["listItem_block", "Contenido"],
   ["button_block", "Formularios"],
   ["input_block", "Formularios"],
   ["select_block", "Formularios"],
   ["option_block", "Formularios"],
   ["inputType_dropdown_block", "Formularios"],
   ["plaintext_block", "Valores"],
   ["url_block", "Valores"],
];
const ordenJerarquicoBloquesCSS = [
   ["styles_block", "Selectores"],
   ["selector_block", "Selectores"],
   ["selector_dropdown_block", "Selectores"],
   ["label_coloresFondos", "Propiedades"],
   ["property_color_block", "Propiedades"],
   ["property_backgroundcolor_block", "Propiedades"],
   ["property_backgroundImage_block", "Propiedades"],
   ["label_cajasBordes", "Propiedades"],
   ["property_border_block", "Propiedades"],
   ["property_grid_block", "Propiedades"],
   ["property_margin_block", "Propiedades"],
   ["property_padding_block", "Propiedades"],
   ["label_estiloTextos", "Propiedades"],
   ["property_listStyle_block", "Propiedades"],
   ["property_fontFamily_block", "Propiedades"],
   ["property_fontStyle_block", "Propiedades"],
   ["property_textDecoration_block", "Propiedades"],
   ["label_colores", "Valores"],
   ["color_dropdown_block", "Valores"],
   ["colorPicker_block", "Valores"],
   ["colorRGB_block", "Valores"],
   ["colorRGBA_block", "Valores"],
   ["label_textos", "Valores"],
   ["textDecoration_dropdown_block", "Valores"],
   ["fontFamily_dropdown_block", "Valores"],
   ["listStyle_dropdown_block", "Valores"],
   ["label_medidas", "Valores"],
   ["number_dropdown_block", "Valores"],
   ["label_imagenes", "Valores"],
   ["bSize_dropdown_block", "Valores"],
   ["url_block", "Valores"],
   ["label_cajasBordes", "Valores"],
   ["border_dropdown_block", "Valores"],
   ["grid_dropdown_block", "Valores"],
];

// configurarYRenderizarToolbox(
//    miControlador,
//    categoriaElegidaHtml,
//    ordenJerarquicoBloques,
//    estadoWorkspaceInicialHTML,
//    "wsp-html",
//    "HTML",
//  );
//  configurarYRenderizarToolbox(
//    miControlador,
//    categoriaElegidaCss,
//    ordenJerarquicoBloquesCSS,
//    estadoWorkspaceInicialCSS,
//    "wsp-css",
//    "CSS"
//  );
miControlador.crearInyectarWorkspace(categoriaElegidaHtml,
   ordenJerarquicoBloques,
   estadoWorkspaceInicialHTML,
   "wsp-html",
   "HTML")
miControlador.crearInyectarWorkspace(categoriaElegidaCss,
   ordenJerarquicoBloquesCSS,
   estadoWorkspaceInicialCSS,
   "wsp-css",
   "CSS")
