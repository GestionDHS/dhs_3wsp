export const cssGenerator = new Blockly.Generator('CSS');


const Order = {
    ATOMIC: 0,
};
  
cssGenerator.scrub_ = function (block, code, thisOnly) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
      return code + cssGenerator.blockToCode(nextBlock);
    }
    return code;
};

cssGenerator.forBlock['styles_block'] = function (block) {
    var code = cssGenerator.statementToCode(block, 'todosLosEstilos');
    return code 
};

cssGenerator.forBlock['selector_block'] = function (block) {
    // var selector = block.getFieldValue('selector');
    var selector = cssGenerator.valueToCode(block, 'selector', Order.ATOMIC);
    var propiedades = cssGenerator.statementToCode(block, 'propiedades');
    var code = selector + '{\n'+ propiedades + '}'
    return code 
};

cssGenerator.forBlock['selector_dropdown_block'] = function (block) {
    var selector = block.getFieldValue('selector');
    return [selector, Order.ATOMIC]
};

cssGenerator.forBlock['property_color_block'] = function (block) {
    var colorElegido = cssGenerator.valueToCode(block, 'valueColor', Order.ATOMIC);
    // var contenido = block.getFieldValue('valueColor');
    var code = 'color: ' + colorElegido + ';\n';
    return code
};

cssGenerator.forBlock['property_backgroundcolor_block'] = function (block) {
    var colorElegido = cssGenerator.valueToCode(block, 'valueColor', Order.ATOMIC);
    // var contenido = block.getFieldValue('valueColor');
    var code = 'background-color: ' + colorElegido + ';\n';
    return code
};

cssGenerator.forBlock['property_fontFamily_block'] = function (block) {
    var fuenteElegida = cssGenerator.valueToCode(block, 'fontFamilyValue', Order.ATOMIC);
    var code = 'font-family: ' + fuenteElegida + ';\n';
    return code
};

cssGenerator.forBlock['property_textDecoration_block'] = function (block) {
    var decorationType = cssGenerator.valueToCode(block, 'decorationType', Order.ATOMIC);
    var code = 'text-decoration: ' + decorationType + ';\n';
    return code
};

cssGenerator.forBlock['property_listStyle_block'] = function (block) {
    var estiloLista = cssGenerator.valueToCode(block, 'listStyleValue', Order.ATOMIC);
    var code = 'list-style: ' + estiloLista + ';\n';
    return code
};

cssGenerator.forBlock['property_backgroundImage_block'] = function (block) {
    var url = 'background-iamge: URL("' + cssGenerator.valueToCode(block, 'urlValue', Order.ATOMIC) + ');\n';
    var size = 'background-size: ' + cssGenerator.valueToCode(block, 'size', Order.ATOMIC) + ';\n';
    var repeat = block.getFieldValue('repeat') === "TRUE" ? "background-repeat: repeat;\n" : "background-repeat: no-repeat;\n";
    var fixed = block.getFieldValue('fixed') === "TRUE" ? "background-attachement: fixed;\n" : "background-attachement: scroll;\n";
    // console.log(repeatCode);
    var code = url + size + repeat + fixed
    return code
};

cssGenerator.forBlock['property_fontStyle_block'] = function (block) {
    var bold = block.getFieldValue('bold') === "TRUE" ? "font-weight: bold;\n" : "";
    var cursive = block.getFieldValue('cursive') === "TRUE" ? "font-style: cursive;\n" : "";

    var code = bold + cursive;
    return code
};

cssGenerator.forBlock['property_border_block'] = function (block) {
    var width = cssGenerator.valueToCode(block, 'widthValue', Order.ATOMIC)
    var typeValue = cssGenerator.valueToCode(block, 'typeValue', Order.ATOMIC);
    var colorValue = cssGenerator.valueToCode(block, 'colorValue', Order.ATOMIC);
    var code = "border: " + width + " " + typeValue + " " + colorValue + ";\n"
    return code
};

cssGenerator.forBlock['property_grid_block'] = function (block) {
    var gridColumns = cssGenerator.valueToCode(block, 'gridColumns', Order.ATOMIC)
    var gap = cssGenerator.valueToCode(block, 'gap', Order.ATOMIC);
    var code = "grid-temaplate-columns: " + gridColumns + ";\ngap: " + gap + ";\n"
    return code
};

cssGenerator.forBlock['textDecoration_dropdown_block'] = function(block) {
    var decoration = block.getFieldValue('decoration');
    return [decoration, Order.ATOMIC]
};

cssGenerator.forBlock['fontFamily_dropdown_block'] = function(block) {
    var fontFamily = block.getFieldValue('fontFamily');
    return [fontFamily, Order.ATOMIC]
};

cssGenerator.forBlock['listStyle_dropdown_block'] = function(block) {
    var listStyle = block.getFieldValue('listStyle');
    return [listStyle, Order.ATOMIC]
};

cssGenerator.forBlock['grid_dropdown_block'] = function(block) {
    var columns = block.getFieldValue('columns');
    return [columns, Order.ATOMIC]
};

cssGenerator.forBlock['number_dropdown_block'] = function(block) {
    var number = block.getFieldValue('number');
    var unidad = block.getFieldValue('unidad');
    var code = number + unidad
    return [code, Order.ATOMIC]
};

cssGenerator.forBlock['border_dropdown_block'] = function(block) {
    var borderType = block.getFieldValue('borderType');
    // console.log(bSize);
    return [borderType, Order.ATOMIC]
};

cssGenerator.forBlock['bSize_dropdown_block'] = function(block) {
    var bSize = block.getFieldValue('bSize');
    // console.log(bSize);
    return [bSize, Order.ATOMIC]
};

cssGenerator.forBlock['fontFamily_dropdown_block'] = function(block) {
    var fontFamily = block.getFieldValue('fontFamily');
    // console.log(bSize);
    return [fontFamily, Order.ATOMIC]
};


cssGenerator.forBlock['plaintext_block'] = function(block) {
    var textContent = block.getFieldValue('content');
    return [textContent, Order.ATOMIC]
};

cssGenerator.forBlock['url_block'] = function(block) {
    var urlContent = block.getFieldValue('url');
    return [urlContent, Order.ATOMIC]
};

cssGenerator.forBlock['colorPicker_block'] = function (block) {
    var color = block.getFieldValue('colorElegido');
    return [color, Order.ATOMIC]
};

cssGenerator.forBlock['color_dropdown_block'] = function(block) {
    var color = block.getFieldValue('color');
    // console.log(bSize);
    return [color, Order.ATOMIC]
};

cssGenerator.forBlock['colorRGB_block'] = function(block) {
    var colorR = block.getFieldValue('colorR');
    var colorG = block.getFieldValue('colorG');
    var colorB = block.getFieldValue('colorB');
    var colorRGB = 'RGB(' + colorR + ',' + colorG + ',' + colorB + ')'
    return [colorRGB, Order.ATOMIC]
};

cssGenerator.forBlock['colorRGBA_block'] = function(block) {
    var colorR = block.getFieldValue('colorR');
    var colorG = block.getFieldValue('colorG');
    var colorB = block.getFieldValue('colorB');
    var colorA = block.getFieldValue('colorA');
    var colorRGBA = 'RGBA(' + colorR + ',' + colorG + ',' + colorB + ',' + colorA +')'
    return [colorRGBA, Order.ATOMIC]
};