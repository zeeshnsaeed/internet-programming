// function print5() {
//     alert(1);
//     alert(2);
//     alert(3);
//     alert(4);
//     alert(5);
// }

// window.onload = function() {
//     print5();
//     print5();
// };


const myLoadFunction = () => {
    var el = document.getElementById('name')
    el.firstChild.nodeValue = 'Zeeshan Saeed'
}

const myLoadFunction2 = () => {
    var el = document.getElementById('quote')
    el.firstChild.nodeValue = 'The quick brown fox runs over the lazy dog'
}

var el = document.getElementById('name')
var el2 = document.getElementById('quote')

el.addEventListener('click', myLoadFunction)
el2.addEventListener('click', myLoadFunction2)
