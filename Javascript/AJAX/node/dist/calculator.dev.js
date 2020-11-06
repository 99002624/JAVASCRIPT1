"use strict";

exports.add = function (number1, number2) {
  dontexport();
  return parseInt(number1, 2) + parseInt(number2, 2);
};

exports.multiply = function (number1, number2) {
  dontexport();
  return parseInt(number1, 2) * parseInt(number2, 2);
};

function dontexport() {
  console.log("helloworld");
}