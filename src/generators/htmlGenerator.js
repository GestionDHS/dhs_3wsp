export const htmlGenerator = new Blockly.Generator('HTML');

const Order = {
    ATOMIC: 0,
};
  
htmlGenerator.scrub_ = function (block, code, thisOnly) {
    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock && !thisOnly) {
      return code + htmlGenerator.blockToCode(nextBlock);
    }
    return code;
};
  
htmlGenerator.forBlock['structure_block'] = function (block) {
    var configuración = htmlGenerator.statementToCode(block, 'configuracion');
    var contenido = htmlGenerator.statementToCode(block, 'contenido');
    var code = '<!DOCTYPE html>\n<html lang="en">\n<head>\n'+configuración +'</head>\n<body>\n'+contenido+'</body>\n</html>\n';
    return code
};

htmlGenerator.forBlock['title_block'] = function (block) {
    var contenido = htmlGenerator.valueToCode(block, 'contenidoTitle', Order.ATOMIC);
    var code = '<title>'+contenido+'</title>\n';
    return code
};

htmlGenerator.forBlock['link_block'] = function (block) {
    var hrefValue = block.getFieldValue('link_options');
    var code = '<link rel="stylesheet" href="'+ hrefValue+'">\n';
    return code
}; 

htmlGenerator.forBlock['script_block'] = function (block) {
    var url = block.getFieldValue('script_options');
    var code = '<script src="'+url+'"</script>\n';
    return code
};

htmlGenerator.forBlock['charset_block'] = function (block) {
    var opcion = block.getFieldValue('charset_options');
    // <meta charset="UTF-8">

    var code = '<meta charset="'+opcion+'">\n';
    return code
};

htmlGenerator.forBlock['semantics_block'] = function (block) {
    var contenidoHeader = htmlGenerator.statementToCode(block, 'header');
    var contenidoMain = htmlGenerator.statementToCode(block, 'main');
    var contenidoFooter = htmlGenerator.statementToCode(block, 'footer');
    // <meta charset="UTF-8">
    var code = '<header>\n'+contenidoHeader+'</header>\n<main>\n'+contenidoMain+'</main>\n<footer>\n'+contenidoFooter+'</footer>\n';
    return code
};

htmlGenerator.forBlock['boxes_block'] = function (block) {
    var tipoCaja = block.getFieldValue('tipoCaja');
    var contenidoCaja = htmlGenerator.statementToCode(block, 'contenidoCaja');
    var code = '<' + tipoCaja + '>\n' + contenidoCaja + '</' + tipoCaja + '>\n';
    return code
}; 

htmlGenerator.forBlock['boxes_name_block'] = function (block) {
    var tipoCaja = block.getFieldValue('tipoCaja');
    var nombre = htmlGenerator.valueToCode(block, 'nombre', Order.ATOMIC);
    var contenidoCaja = htmlGenerator.statementToCode(block, 'contenidoCaja');
    var code = '<' + tipoCaja + 'class="' + nombre + '">\n' + contenidoCaja + '</' + tipoCaja + '>\n';
    return code
}; 

htmlGenerator.forBlock['list_block'] = function (block) {
    var tipoLista = block.getFieldValue('tipoLista');
    var items = htmlGenerator.statementToCode(block, 'items');
    var code = '<' + tipoLista + '>\n' + items + '</' + tipoLista + '>\n';
    return code
}; 

htmlGenerator.forBlock['headings_block'] = function (block) {
    var nivelEncabezado = block.getFieldValue('nivelEncabezado');
    var contenido = htmlGenerator.valueToCode(block, 'contenidoEncabezado', Order.ATOMIC);
    var code = '<' + nivelEncabezado + '>' + contenido + '</' + nivelEncabezado + '/>\n';
    return code
}; 

htmlGenerator.forBlock['paragraph_block'] = function (block) {
    var contenido = htmlGenerator.valueToCode(block, 'contenidoParrafo', Order.ATOMIC);
    // var contenido = block.getFieldValue('contenidoParrafo');
    var code = '<p>'+contenido+'</p>\n';
    return code
};

htmlGenerator.forBlock['listItem_block'] = function (block) {
    var contenido = htmlGenerator.valueToCode(block, 'contenidoItem', Order.ATOMIC);
    var code = '<li>'+contenido+'</li>\n';
    return code
};

htmlGenerator.forBlock['paragraph_link_block'] = function (block) {
    var contenidoPrincipio = htmlGenerator.valueToCode(block, 'startText', Order.ATOMIC);
    var enlace = htmlGenerator.statementToCode(block, 'anchor');
    var contenidoFinal = htmlGenerator.valueToCode(block, 'endText', Order.ATOMIC);
    // var contenido = block.getFieldValue('contenidoParrafo');
    var code = '<p>' + contenidoPrincipio + enlace.replace(/\n$/, '') + contenidoFinal + '</p>\n';
    return code
};

htmlGenerator.forBlock['anchor_block'] = function (block) {
    var href = htmlGenerator.valueToCode(block, 'href_value', Order.ATOMIC);
    var contenido = htmlGenerator.valueToCode(block, 'text_value', Order.ATOMIC);
    var target = block.getFieldValue('target_value') === "TRUE" ? 'target= "_blank"' : "";
    var code = '<a href="' + href + '" ' + target + '>' + contenido + '</a>\n';
    return code
};

htmlGenerator.forBlock['image_block'] = function (block) {
    var src = htmlGenerator.valueToCode(block, 'src_value', Order.ATOMIC);
    var alt = htmlGenerator.valueToCode(block, 'alt_value', Order.ATOMIC);
    var code = '<img src="'+src+'" alt="'+alt+'">\n';
    return code
};

htmlGenerator.forBlock['button_block'] = function (block) {
    var onclick = htmlGenerator.valueToCode(block, 'onclick', Order.ATOMIC);
    var contenido = htmlGenerator.valueToCode(block, 'buttonValue', Order.ATOMIC);
    var code = '<button onclick="' + onclick + '">' + contenido + '</button>\n';
    return code
};

htmlGenerator.forBlock['input_block'] = function (block) {
    var inputlabel = htmlGenerator.valueToCode(block, 'inputLabel', Order.ATOMIC);
    var inputtype = htmlGenerator.valueToCode(block, 'inputType', Order.ATOMIC);
    var inputplaceholder = htmlGenerator.valueToCode(block, 'inputPlaceholder', Order.ATOMIC);
    var code = '<label>' + inputlabel + '</label>\n<input type="' + inputtype + '" placeholder="' + inputplaceholder + '">'
    return code
};

htmlGenerator.forBlock['select_block'] = function (block) {
    var options = htmlGenerator.statementToCode(block, 'options');
    var code = '<select>\n' + options + '</select>\n';
    return code
}; 

htmlGenerator.forBlock['option_block'] = function (block) {
    var contenidoOpcion = htmlGenerator.valueToCode(block, 'contenidoOpcion', Order.ATOMIC);
    var code = '<option value="' + contenidoOpcion.toLowerCase().replace(/ /g,'') + '">' + contenidoOpcion + '</option>\n';
    return code
};

htmlGenerator.forBlock['inputType_dropdown_block'] = function(block) {
    var inputType = block.getFieldValue('inputType');
    return [inputType, Order.ATOMIC]
};

htmlGenerator.forBlock['plaintext_block'] = function(block) {
    var textContent = block.getFieldValue('content');
    return [textContent, Order.ATOMIC]
};
  
htmlGenerator.forBlock['url_block'] = function(block) {
    var urlContent = block.getFieldValue('url');
    return [urlContent, Order.ATOMIC]
};