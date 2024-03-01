// const displayText = () => {
//   var res = document.getElementById("result");
//   var textBoxValue = document.getElementById("textBox").value;
//   res.firstChild.nodeValue = textBoxValue;
// };

const displayText = () => {
  var res = document.getElementById("result");
  var textBoxValue = document.getElementById("textBox").value;
  res.innerHTML = textBoxValue;
};
