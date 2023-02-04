import './style.css';

const moduleController = (() => {
  // All business logic here..
  let num = 10;

  let addition = (outerValue) => {
    return outerValue + num;
  };

  let showResult = (outerValue) => {
    return addition(outerValue);
  };

  return {
    showResult: showResult,
  };
})();

console.log(moduleController.showResult(5));

const viewController = (() => {
  // All UI modification/ rendering will comer here.
  return {};
})();

const eventsController = ((moduleCtrl, viewCtrl) => {
  // All events logic here..
  const result = moduleCtrl.showResult(11);

  const getResult = () => {
    return result;
  };

  return {
    getResult: getResult,
  };
})(moduleController, viewController);

console.log('Calling other cntrl value', eventsController.getResult());
