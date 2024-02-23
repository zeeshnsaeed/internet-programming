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

document.addEventListener('DOMContentLoaded', myLoadFunction)