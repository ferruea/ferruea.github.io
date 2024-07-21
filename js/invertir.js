function invertir() { 
    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' + 
        '-o-filter: invert(100%);' + 
        '-ms-filter: invert(100%); }';

    // Agregar aquí los selectores específicos para las partes superiores e inferiores de los móviles
    // Ejemplo de selectores:
    css += 'header, footer {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' + 
        '-o-filter: invert(100%);' + 
        '-ms-filter: invert(100%); }';

    var head = document.getElementsByTagName('head')[0],
        style = document.createElement('style');

    if (!window.counter) {
        window.counter = 1;
    } else {
        window.counter++;
        if (window.counter % 2 == 0) {
            css = 'html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
            css += 'header, footer {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }';
        }
    }

    style.type = 'text/css';
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
}