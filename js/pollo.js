function formatDecimal(val, n) {
//funcion que nos permite mostrar el precio con solo 2 decimales
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
    }
    function getRadioVal(form, name) {
    var radios = form.elements[name];
    var val;
    for (var i=0, len=radios.length; i<len; i++) {
    if (radios[i].checked == true) {
    val = radios[i].value;
    break;
    }
    }
    return val;
    }
    function getToppingsTotal(e) {
        //calculamos el subtotal de los productos extras
    var form = this.form;
    var val = parseFloat(form.elements['tops_tot'].value);
    if ( this.checked == true ) {
    val += parseFloat(this.value);
    } else {
    val -= parseFloat(this.value);
    }
    form.elements['tops_tot'].value = formatDecimal(val);
    updatepolloTotal(form);
    }
    //total del valor del pollo de acuerdo al tamaño
    function getSizePrice(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    updatepolloTotal(this.form);
}

//funcion que nos permite calcular el total a pagar con todos los productos agregados y combo seleccionado
function updatepolloTotal(form) {
var cantidad = parseInt(document.getElementById('cantidad').value);
 
var sz_tot = parseFloat(form.elements['sz_tot'].value);
var tops_tot = parseFloat(form.elements['tops_tot'].value);

form.elements['total'].value = formatDecimal( ( cantidad*sz_tot) + tops_tot);

}
    

(function() {
var form = document.getElementById('formulario');
var el = document.getElementById('pollo_toppings');
// determinar los productos seleccionados en las casillas de verificación
//
var tops = el.getElementsByTagName('input');
for (var i=0, len=tops.length; i<len; i++) {
if (tops[i].type === 'checkbox') {
tops[i].onclick = getToppingsTotal;
}
}
var sz = form.elements['combo'];
for (var i=0, len=sz.length; i<len; i++) {
sz[i].onclick = getSizePrice;
}
form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'combo')));
updatepolloTotal(form);
})();

function recibo(){
    //funcion que nos genera el recibo
    var cantidad = parseInt(document.getElementById('cantidad').value);
var sz_tot = parseFloat(document.getElementById('sz_tot'));
var tops_tot = parseFloat(document.getElementById('tops_tot'));
var totalp= sz_tot +tops_tot; 
var seleccionado= document.getElementById('combo');
document.write('<div class="title"><h3>Pedido</h3></div>');
document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">'+ seleccionado +' </p>');
document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms"> </p>');
document.write('<div class="title"><h3>Total a <span>pagar</span></h3></div>');
document.write('<p class="wow fadeInUp" data-wow-duration="300ms" data-wow-delay="400ms">'+ totalp +' </p>');

}

