//Array invertir colores
function invertir() { 
    var css = 'html {-webkit-filter: invert(100%);' +
        '-moz-filter: invert(100%);' + 
        '-o-filter: invert(100%);' + 
        '-ms-filter: invert(100%); }',
    head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');

if (!window.counter) { window.counter = 1;} else  { window.counter ++;
if (window.counter % 2 == 0) { var css ='html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'}
 };

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
 }

// Recarga de página en dispositivos móviles
document.addEventListener("DOMContentLoaded", function() {
    function isMobileDevice() {
        return window.matchMedia("(max-width: 1000px)").matches;
    }
    if (isMobileDevice()) {
        if (!sessionStorage.getItem('reloaded')) {
            sessionStorage.setItem('reloaded', 'true');
            location.reload(true);
        } else {
            sessionStorage.removeItem('reloaded');
        }
    }
});