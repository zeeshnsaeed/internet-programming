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


const updateElement = (id, value) => {
    const el = document.getElementById(id);
    el.firstChild.nodeValue = value;
};

const myLoadFunction = () => {
    updateElement('name', 'Zeeshan Saeed');
};

const myLoadFunction2 = () => {
    updateElement('quote', 'The quick brown fox runs over the lazy dog');
};

const myLoadFunction3 = () => {
    updateElement('address', 'Northampton, UK');
};

const myLoadFunction4 = () => {
    updateElement('age', '25');
};

document.getElementById('name').addEventListener('click', myLoadFunction);
document.getElementById('quote').addEventListener('click', myLoadFunction2);
document.getElementById('address').addEventListener('mouseenter', myLoadFunction3);
document.getElementById('age').addEventListener('mouseleave', myLoadFunction4);


