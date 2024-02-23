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

const myLoadFunction3 = () => {
    var el = document.getElementById('address')
    el.firstChild.nodeValue = 'Northampton, UK'
}

const myLoadFunction4 = () => {
    var el = document.getElementById('age')
    el.firstChild.nodeValue = '25'
}

var el = document.getElementById('name')
var el2 = document.getElementById('quote')
var el3 = document.getElementById('address')
var el4 = document.getElementById('age')



el.addEventListener('click', myLoadFunction)
el2.addEventListener('click', myLoadFunction2)
el3.addEventListener('mouseenter', myLoadFunction3)
el4.addEventListener('mouseleave', myLoadFunction4)


