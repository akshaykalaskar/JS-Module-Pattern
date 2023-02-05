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
