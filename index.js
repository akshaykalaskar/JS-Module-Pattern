import './style.css';

//-------------- Model --------------//
var moduleController = (function () {
  // All business logic here..
  let num = 10;

  let addition = function (outerValue) {
    return outerValue + num;
  };

  let showResult = function (outerValue) {
    return addition(outerValue);
  };

  return {
    showResult: showResult,
  };
})();

console.log(moduleController.showResult(5));
//-------------- Model -------------//

//-------------- View --------------//

const viewController = (function () {
  // All UI modification/ rendering will comer here.
  var domStrings = {
    name: '#name',
    amount: '#amount',
    type: '#type',
  };
  var returnInputData = function () {
    // return {
    //   // name: document.querySelector(name).value,
    //   amount: document.querySelector(amount).value,
    //   type: document.querySelector(type).value
    // };
    console.log('yes', document.getElementById('name').value);
  };
  return { returnInputData };
})();

//-------------- View --------------//

//----------- Controller -----------//

const eventsController = (function (moduleCtrl, viewCtrl) {
  // All events logic here..
  document.querySelector('.calculate').addEventListener('click', handleClick);

  function handleClick() {
    console.log(viewCtrl.returnInputData());
  }

  return {
    // getResult: getResult,
  };
})(moduleController, viewController);

//----------- Controller -----------//
